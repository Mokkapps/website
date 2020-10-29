/**
 * A NodeJS script which generates a blog post template
 * Inspired by https://github.com/kentcdodds/kentcdodds.com/blob/master/generate/blogpost.js
 */

const path = require('path');
const fs = require('fs');
const util = require('util');
const jsToYaml = require('json-to-pretty-yaml');
const mkdirp = require('mkdirp');
const fakeUa = require('fake-useragent');
const opn = require('opn');
const axios = require('axios');
const slugify = require('@sindresorhus/slugify');
const inquirer = require('inquirer');
const tinify = require('tinify');
const ora = require('ora');
require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

const fromRoot = (...p) => path.join(__dirname, '..', ...p);

tinify.key = process.env.TINY_PNG_API_KEY;

async function generateBlogPost() {
  const {
    title,
    categories,
    date,
    useUnsplash,
    dryRun,
  } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title',
    },
    {
      type: 'checkbox',
      name: 'categories',
      choices: [
        'development',
        'spring',
        'career',
        'productivity',
        'tools',
        'angular',
        'freelancing',
        'testing',
      ],
      message: 'Categories',
    },
    {
      type: 'input',
      name: 'date',
      message: 'Release Date (format: yyyy-mm-dd)',
    },
    {
      type: 'confirm',
      name: 'useUnsplash',
      default: false,
      message: 'Use cover image from Unsplash? (default: false)',
    },
    {
      type: 'confirm',
      name: 'dryRun',
      default: false,
      message: 'Dry run without creating files? (default: false)',
    },
  ]);
  const slug = slugify(title);
  const year = new Date(date).getFullYear();
  const destination = fromRoot(
    `src/content/posts/${year}`,
    `${date}___${slug}`
  );
  mkdirp.sync(destination);

  let bannerCredit;
  if (!dryRun && useUnsplash) {
    bannerCredit = await getBannerPhoto(title, destination);
  }

  const mdObj = {
    title: titleCaps(title),
    categories,
    cover: 'images/cover.jpg',
  };
  const yaml = jsToYaml.stringify(removeEmpty(mdObj));
  const mdData = `---\n${yaml}\n---\n${
    bannerCredit ? '<small>${bannerCredit}</small>' : ''
  }`;
  console.log(`Markdown data:\n${mdData}`);
  if (!dryRun) {
    fs.writeFileSync(path.join(destination, 'index.md'), mdData);
    console.log(
      `${destination.replace(process.cwd(), '')} is all ready for you`
    );
  }
}

async function getBannerPhoto(title, destination) {
  const imagesDestination = path.join(destination, 'images');

  await opn(`https://unsplash.com/search/photos/${encodeURIComponent(title)}`, {
    wait: false,
  });

  const { unsplashPhotoId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'unsplashPhotoId',
      message: `What's the Unsplash Photo ID for the banner for this post?`,
    },
  ]);
  mkdirp.sync(imagesDestination);

  const source = tinify
    .fromUrl(
      `https://unsplash.com/photos/${unsplashPhotoId}/download?force=true`
    )
    .resize({
      method: 'cover',
      width: 2070,
      height: 1500,
    });

  const spinner = ora('compressing the image with tinypng.com').start();
  await util
    .promisify(source.toFile)
    .call(source, path.join(imagesDestination, 'cover.jpg'));
  spinner.text = 'compressed the image with tinypng.com';
  spinner.stop();

  const bannerCredit = await getPhotoCredit(unsplashPhotoId);
  return bannerCredit;
}

async function getPhotoCredit(unsplashPhotoId) {
  const response = await axios({
    url: `https://unsplash.com/photos/${unsplashPhotoId}`,
    headers: { 'User-Agent': fakeUa() },
  });
  const {
    groups: { name },
  } = response.data.match(/Photo by (?<name>.*?) on Unsplash/) || {
    groups: { name: 'Unknown' },
  };
  const url = `https://unsplash.com/photos/${unsplashPhotoId}}`;
  return `Photo by <a href=${url}>${name}</a>`;
}

function removeEmpty(obj) {
  return Object.entries(obj).reduce((o, [key, value]) => {
    if (value) {
      o[key] = value;
    }
    return o;
  }, {});
}

/*
 * Title Caps
 *
 * Ported to JavaScript By John Resig - http://ejohn.org/ - 21 May 2008
 * Original by John Gruber - http://daringfireball.net/ - 10 May 2008
 * License: http://www.opensource.org/licenses/mit-license.php
 */
function titleCaps(title) {
  const small =
    '(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)';
  const punct = '([!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)';
  let parts = [];
  let split = /[:.;?!] |(?: |^)["Ò]/g;
  let index = 0;

  function lower(word) {
    return word.toLowerCase();
  }

  function upper(word) {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  }

  while (true) {
    let m = split.exec(title);

    parts.push(
      title
        .substring(index, m ? m.index : title.length)
        .replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, function (all) {
          return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
        })
        .replace(RegExp('\\b' + small + '\\b', 'ig'), lower)
        .replace(RegExp('^' + punct + small + '\\b', 'ig'), function (
          all,
          punct,
          word
        ) {
          return punct + upper(word);
        })
        .replace(RegExp('\\b' + small + punct + '$', 'ig'), upper)
    );

    index = split.lastIndex;

    if (m) parts.push(m[0]);
    else break;
  }

  return parts
    .join('')
    .replace(/ V(s?)\. /gi, ' v$1. ')
    .replace(/(['Õ])S\b/gi, '$1s')
    .replace(/\b(AT&T|Q&A)\b/gi, function (all) {
      return all.toUpperCase();
    });
}

generateBlogPost();

/* eslint no-console:0 */

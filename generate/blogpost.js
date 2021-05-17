/**
 * A NodeJS script which generates a blog post template
 * Inspired by https://github.com/kentcdodds/kentcdodds.com/blob/master/generate/blogpost.js
 */

import dateformat from 'dateformat';
import path from 'path';
import fs from 'fs';
import jsToYaml from 'json-to-pretty-yaml';
import mkdirp from 'mkdirp';
import slugify from '@sindresorhus/slugify';
import inquirer from 'inquirer';

const today = new Date();
const defaultDate = new Date().setDate(today.getDate() + 5);

async function generateBlogPost() {
  const { title, categories, date, dryRun } = await inquirer.prompt([
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
        'react',
        'freelancing',
        'testing',
        'fullstack',
        'frontend',
        'backend',
        'aws',
      ],
      message: 'Categories',
    },
    {
      type: 'input',
      name: 'date',
      default: dateformat(defaultDate, 'yyyy-mm-dd'),
      message: 'Release Date (format: yyyy-mm-dd)',
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
  const destination = path.resolve(
    `src/content/posts/${year}`,
    `${date}___${slug}`
  );
  const mdObj = {
    title: titleCaps(title),
    categories,
    cover: 'images/cover.jpg',
  };
  const yaml = jsToYaml.stringify(removeEmpty(mdObj));
  const mdData = `---
${yaml}---

## Conclusion

If you liked this article, follow me on [Twitter](https://twitter.com/mokkapps) to get notified about new blog posts and more content from me.
`;
  console.log(`Slug:\n${slug}\n`);
  console.log(`Markdown data:\n${mdData}`);

  if (!dryRun) {
    // create directory
    mkdirp.sync(destination);

    const markdownPath = path.join(destination, 'index.md');
    const imagesFolderPath = path.join(destination, 'images');
    // create markdown file
    fs.writeFileSync(markdownPath, mdData);
    // create images folder
    if (!fs.existsSync(imagesFolderPath)) {
      fs.mkdirSync(imagesFolderPath);
    }
    fs.readFile(markdownPath, err => {
      if (err) {
        console.error('File could not be created', err);
      }
      console.info(`Successfully created markdown file at "${markdownPath}"`);
    });
  }
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
        .replace(
          RegExp('^' + punct + small + '\\b', 'ig'),
          function (all, punct, word) {
            return punct + upper(word);
          }
        )
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

generateBlogPost().catch(e => console.error('Failed to create blog post', e));

/* eslint no-console:0 */

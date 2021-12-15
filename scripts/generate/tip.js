/**
 * A NodeJS script which generates a tip template
 * Inspired by https://github.com/kentcdodds/kentcdodds.com/blob/master/generate/blogpost.js
 */

import dateformat from 'dateformat';
import path from 'path';
import fs from 'fs';
import jsToYaml from 'json-to-pretty-yaml';
import mkdirp from 'mkdirp';
import slugify from '@sindresorhus/slugify';
import inquirer from 'inquirer';

import { titleCaps } from './title-caps.js';

const today = new Date();
const defaultDate = new Date().setDate(today.getDate() + 5);
const fromRoot = (...p) => path.join(process.env.PWD, ...p);

async function generateTip() {
  const { title, description, date, dryRun } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
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
  const latestTipsFolders = fs.readdirSync(fromRoot(`src/content/tips`)).sort((a, b) => {
    return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
  });
  const latestTipsNumber = Number(
    latestTipsFolders[latestTipsFolders.length - 1]
  );

  const destination = path.resolve(
    `src/content/tips/${latestTipsNumber + 1}`
  );

  const mdObj = {
    title: titleCaps(title),
    description,
    date,
    cover: 'images/cover.jpg',
  };
  const yaml = jsToYaml.stringify(removeEmpty(mdObj));
  const mdData = `---
${yaml}---
![](./images/cover.jpg)

---
<br/>

If you liked this tip, follow me on [Twitter](https://twitter.com/mokkapps) to get notified about new tips, blog posts and more content from me.

Alternatively (or additionally), you can also [subscribe to my newsletter](https://mokkapps.de/newsletter).
`;
  console.log(`Date:\n${date}\n`);
  console.log(`Slug:\n${slug}\n`);
  console.log(`Markdown data:\n${mdData}`);

  if (!dryRun) {
    // create directory
    mkdirp.sync(destination);

    const markdownPath = path.join(destination, `${slug}.mdx`);
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

generateTip().catch(e => console.error('Failed to create tip', e));

/* eslint no-console:0 */

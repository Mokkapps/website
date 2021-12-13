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

import { titleCaps } from './title-caps.js';

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
        'vue-js',
        'node-js',
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

Alternatively (or additionally), you can also [subscribe to my newsletter](https://mokkapps.de/newsletter).
`;
  console.log(`Date:\n${date}\n`);
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

generateBlogPost().catch(e => console.error('Failed to create blog post', e));

/* eslint no-console:0 */

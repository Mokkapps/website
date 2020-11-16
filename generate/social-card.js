#!/usr/bin/env node

// full script available here:
// https://github.com/maxpou/gatsby-starter-morning-dew/blob/master/scripts/generatePostPreviewImages.js

/* eslint-disable no-console */
const { readFile, readdirSync, existsSync, mkdirSync } = require('fs');
const { join, dirname } = require('path');
const glob = require('glob');
const YAML = require('yaml');
const puppeteer = require('puppeteer');
const inquirer = require('inquirer');

const fromRoot = (...p) => join(__dirname, '..', ...p);

const baseUrl = process.argv[2] || 'http://localhost:8000/';

const takeScreenshot = async (url, width, height, destination) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle2',
  });
  await page.screenshot({
    path: destination,
    clip: {
      x: 0,
      y: 0,
      width,
      height,
    },
  });

  await browser.close();
};

const getArticleFiles = () => {
  return glob.sync(
    join(
      process.cwd(),
      'src',
      'content',
      'posts',
      '2020',
      '2020-01-07___manually-lazy-load-modules-and-components-in-angular',
      'index.md'
    )
  );
};

const parseFile = async file => {
  return new Promise((resolve, reject) => {
    readFile(file, 'utf8', (err, content) => {
      if (err) {
        return reject(err);
      }

      const frontmatter = content.split('---')[1];
      const data = YAML.parse(frontmatter);

      return resolve({
        ...data,
        file,
        directory: dirname(file),
      });
    });
  });
};

const main = async () => {
  try {
    const blogPosts = readdirSync(
      fromRoot(`src/content/posts/${new Date().getFullYear()}`)
    );

    const { selectedBlogPosts } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedBlogPosts',
        choices: blogPosts.reverse(),
        message: 'Select a blog post',
      },
    ]);

    for (const blogPost of selectedBlogPosts) {
      const slug = blogPost.split('___')[1];
      const outputDir = fromRoot(`.build`);
      const destinationFile = fromRoot(`.build/${slug}-share.png`);

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir);
      }

      if (!existsSync(destinationFile)) {
        await takeScreenshot(
          `${baseUrl}blog/${slug}/image-share`,
          440,
          220,
          destinationFile
        );
        console.log(`Created ${destinationFile}`);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

main();

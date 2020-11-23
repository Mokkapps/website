#!/usr/bin/env node

// Generate an image for social media sharing
// full script available here:
// https://github.com/maxpou/gatsby-starter-morning-dew/blob/master/scripts/generatePostPreviewImages.js

/* eslint-disable no-console */
const { readdirSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');
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
      } else {
        console.log('File already exists!');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

main();

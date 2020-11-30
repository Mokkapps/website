#!/usr/bin/env node

// Generate an image for social media sharing
// full script available here:
// https://github.com/maxpou/gatsby-starter-morning-dew/blob/master/scripts/generatePostPreviewImages.js

/* eslint-disable no-console */
const { readdirSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');
const puppeteer = require('puppeteer');
const inquirer = require('inquirer');
const config = require('../src/content/meta/config');

const fromRoot = (...p) => join(__dirname, '..', ...p);

const baseUrl = process.argv[2] || 'http://localhost:8000/';
const width = config.socialShareImage.width;
const height = config.socialShareImage.height;

const VIEWPORT = { width, height, deviceScaleFactor: 2 };

const takeScreenshot = async (url, w, h, destination) => {
  console.log(`👷 Generating image with ${w}/${h}px ...`);
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport(
    Object.assign({}, VIEWPORT, { height })
  );
  await page.goto(url, {
    waitUntil: 'networkidle2',
  });
  await page.click(
    'body > div.cc-window.cc-banner.cc-type-info.cc-theme-classic.cc-bottom.cc-color-override-849295177 > div > a'
  );
  await page.waitForTimeout(200);
  await page.screenshot({
    path: destination,
    type: 'jpeg',
    omitBackground: true,
    clip: {
      x: 0,
      y: 0,
      width: w,
      height: h,
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
          width,
          height,
          destinationFile
        );
        console.log(`✅  Created new share image at ${destinationFile}`);
      } else {
        console.warn('⚠️  File already exists!');
      }
    }
  } catch (err) {
    console.error(err);
  }
};

main();

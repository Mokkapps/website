/**
 * A NodeJS script which generates a markdown TOC (table of contents)
 * for a given blog post
 */

import toc from 'markdown-toc';
import path from 'path';
import fs from 'fs';
import inquirer from 'inquirer';

const fromRoot = (...p) => path.join(process.env.PWD, ...p);

async function generateTableOfContents() {
  try {
    const blogPosts = fs.readdirSync(
      fromRoot(`src/content/posts/${new Date().getFullYear()}`)
    );

    const { selectedBlogPosts, maxDepth } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedBlogPosts',
        choices: blogPosts.reverse(),
        message: 'Select a blog post',
      },
      {
        type: 'input',
        name: 'maxDepth',
        default: 3,
        message: 'Enter the max depth (default: 3)',
      },
    ]);

    for (const blogPost of selectedBlogPosts) {
      fs.readFile(
        fromRoot(
          `src/content/posts/${new Date().getFullYear()}/${blogPost}/index.md`
        ),
        'utf8',
        function (err, data) {
          if (err) {
            return console.log(err);
          }

          console.log(
            `📖 TABLE OF CONTENT 👇🏻\n\n${
              toc(data, {
                maxdepth: maxDepth ? parseInt(maxDepth) : 3,
                bullets: ['*', '-', '+'],
              }).content
            } `
          );
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
}

generateTableOfContents();

/* eslint no-console:0 */

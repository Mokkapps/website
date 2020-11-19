/**
 * A NodeJS script which generates a markdown TOC (table of contents)
 * for a given blog post
 */

const toc = require('markdown-toc');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const fromRoot = (...p) => path.join(__dirname, '..', ...p);

async function generateTableOfContents() {
  try {
    const blogPosts = fs.readdirSync(
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
            `📖 TABLE OF CONTENT 👇🏻\n\n${toc(data, { maxdepth: 2 }).content} `
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

const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);
const path = require(`path`);
const inquirer = require('inquirer');
const {
  anchorsTargetIsEquivalentToSelf,
} = require('gatsby-plugin-catch-links/catch-links');

const MAX_WIDTH = 1800;
const QUALITY = 70;
const fileExtensionsPattern = `*.{png,jpg,jpeg}`;
const defaultPattern = `src/**/**/${fileExtensionsPattern}`;
const imageFolderPattern = `src/images/**/${fileExtensionsPattern}`;
const fromRoot = (...p) => path.join(process.env.PWD, ...p);

async function optimizeImages() {
  const latestTipsFolders = fs.readdirSync(fromRoot(`src/content/tips`));
  const latestTip = latestTipsFolders[latestTipsFolders.length - 1];
  const latestTipPattern = `src/content/tips/${latestTip}/**/${fileExtensionsPattern}`;

  const blogPostsThisYearPath = `src/content/posts/${new Date().getFullYear()}`;
  const blogPostsFolders = fs.readdirSync(fromRoot(blogPostsThisYearPath));
  const latestBlogPost = blogPostsFolders[blogPostsFolders.length - 1];
  const latestBlogPostPattern = `${blogPostsThisYearPath}/${latestBlogPost}/**/${fileExtensionsPattern}`;

  const { selectedPattern } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedPattern',
      choices: [defaultPattern, imageFolderPattern, latestBlogPostPattern, latestTipPattern],
      message:
        'Select a pattern to specify which images should be optimized. Either choose all or only from the latest blog post.',
    },
  ]);

  console.log(`Selected pattern: ${selectedPattern}`);

  const matches = glob.sync(selectedPattern);

  await Promise.all(
    matches.map(async match => {
      console.log(match);
      const stream = sharp(match);
      const info = await stream.metadata();
      if (info.width < MAX_WIDTH) {
        return;
      }
      const optimizedName = match.replace(
        /(\..+)$/,
        (match, ext) => `-optimized${ext}`
      );
      await stream
        .resize(MAX_WIDTH)
        .jpeg({ quality: QUALITY })
        .toFile(optimizedName);
      return fs.rename(optimizedName, match);
    })
  );
}

optimizeImages();

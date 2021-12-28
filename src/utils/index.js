import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { FormattedDate } from 'react-intl';
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';

export const generateSeoImageUrl = title =>
  generateSocialImageUrl({
    title: title.toUpperCase(),
    cloudName: 'mokkapps',
    imagePublicID: 'open_graph_site_template.jpg',
    titleFont: 'domine',
    titleFontSize: 80,
  });

export const isDevelopmentEnv = () => process.env.NODE_ENV === 'development';

export const baseFormattedMessageValues = {
  mark: chunks => <mark>{chunks}</mark>,
};

export const getFormattedDate = (date, withTime = false) =>
  withTime ? (
    <FormattedDate
      year="numeric"
      month="long"
      day="2-digit"
      minute="numeric"
      hour="numeric"
      value={date}
    />
  ) : (
    <FormattedDate year="numeric" month="long" day="2-digit" value={date} />
  );

export const formatNumber = number => new Intl.NumberFormat().format(number);

export const handleArticleClicked = slug => {
  if (!slug) {
    return;
  }
  const localData = JSON.parse(localStorage.getItem(slug));
  if (typeof window !== 'undefined') {
    localStorage.setItem(slug, JSON.stringify({ ...localData, hasRead: true }));
  }
};

export const getNode = (edges, imageName) => {
  return edges
    .map(e => e.node)
    .filter(n => n.childImageSharp)
    .find(n =>
      n.childImageSharp.gatsbyImageData.images.fallback.src.includes(imageName)
    );
};

export const getAsset = (edges, imageName) => {
  const node = edges
    .map(e => e.node)
    .filter(n => n.childImageSharp)
    .find(n =>
      n.childImageSharp.gatsbyImageData.images.fallback.src.includes(imageName)
    );
  return getImage(node.childImageSharp.gatsbyImageData);
};

export const isBrowser = () => typeof window !== 'undefined';

// CSS variable needs to be defined in :root
export function getCssVariableHexColor(propertyName) {
  return isBrowser()
    ? window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(propertyName)
        .trim()
    : propertyName;
}

export function sendCustomAnalyticsEvent(eventName) {
  if (isBrowser() && window.umami && typeof window.umami === 'function') {
    window.umami(eventName);
  }
}

export const yearsOfExperience = new Date().getFullYear() - 2015;

export const getCategoryDisplayText = category => {
  if (category === 'aws') {
    return category.toUpperCase();
  }

  if (category.includes('-js')) {
    const name = category.split('-')[0];
    return `${capitalize(name)}.js`;
  }

  return capitalize(category);
};

export const getAllCategories = allPosts => {
  const postCategories = allPosts.edges
    .map(edge => edge.node.frontmatter.categories)
    .filter(category => category !== null);
  let categories = [];
  for (const categoryArr of postCategories) {
    for (const category of categoryArr) {
      categories.push(category);
    }
  }
  // eslint-disable-next-line no-undef
  categories = Array.from(new Set(categories));
  return categories;
};

export const metaIcons = {
  calendar: FaRegCalendarAlt,
  user: FaRegUser,
};

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

// Inspired by https://braydoncoyer.dev/blog/how-to-dynamically-create-open-graph-images-with-cloudinary-and-next.js
function generateSocialImageUrl({
  title,
  cloudName,
  imagePublicID,
  cloudinaryUrlBase = 'https://res.cloudinary.com',
  version = null,
  titleFont = 'arial',
  titleExtraConfig = '_bold',
  underlayImageWidth = 580,
  underlayImageHeight = 630,
  underlayImage = '',
  imageWidth = 1200,
  imageHeight = 630,
  textAreaWidth = 630,
  textAreaHeight = 450,
  textLeftOffset = 45,
  textBottomOffset = -40,
  textColor = 'FFFFFF',
  titleFontSize = 60,
}) {
  // configure social media image dimensions, quality, and format
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    'c_fill',
    'f_auto',
  ].join(',');

  const underlayConfig = [
    `w_${underlayImageWidth}`,
    `h_${underlayImageHeight}`,
    `c_fill`,
    `u_${underlayImage}/fl_layer_apply`,
    `g_east`,
  ];

  // configure the title text
  const titleConfig = [
    `w_${textAreaWidth}`,
    `h_${textAreaHeight}`,
    'c_fit',
    `co_rgb:${textColor}`,
    'g_west',
    `x_${textLeftOffset}`,
    `y_${textBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}${titleExtraConfig}:${encodeURIComponent(
      title
    )}`,
  ].join(',');

  // combine all the pieces required to generate a Cloudinary URL
  let urlParts = [
    cloudinaryUrlBase,
    cloudName,
    'image',
    'upload',
    imageConfig,
    titleConfig,
    version,
    imagePublicID,
  ];

  if (underlayImage) {
    urlParts = [...urlParts, underlayConfig];
  }

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join('/');
}

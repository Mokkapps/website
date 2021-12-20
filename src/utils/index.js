import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { FormattedDate } from 'react-intl';
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';

export const baseFormattedMessageValues = {
  mark: chunks => <mark>{chunks}</mark>,
};

export const getFormattedDate = date => (
  <FormattedDate year="numeric" month="long" day="2-digit" value={date} />
);

export const formatNumber = number => new Intl.NumberFormat().format(number);

export const handleArticleClicked = slug => {
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

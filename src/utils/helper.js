import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import { getImage } from 'gatsby-plugin-image';
import React from "react";

export const baseFormattedMessageValues = {
  mark: chunks => <mark>{chunks}</mark>,
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
  if (window.umami && typeof window.umami === 'function') {
    window.umami(eventName);
  }
}

export const yearsOfExperience = new Date().getFullYear() - 2015;

export const getCategoryDisplayText = category => {
  if (category === 'aws') {
    return category.toUpperCase();
  }
  if (category === 'node-js') {
    return 'Node.js';
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
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

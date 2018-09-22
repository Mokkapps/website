import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

export const getAsset = (edges, imageName) => {
  return edges
    .map(e => e.node)
    .filter(node => node.childImageSharp)
    .find(node => node.childImageSharp.sizes.src.includes(imageName));
};

export const getFormattedDate = dateString => {
  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return new Date(dateString).toLocaleString('en-US', dateOptions);
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
  categories = Array.from(new Set(categories));
  return categories;
};

export const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

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

export const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

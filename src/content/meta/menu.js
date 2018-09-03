import HomeIcon from 'react-feather/dist/icons/home';
import ProjectsIcon from 'react-feather/dist/icons/code';
import InfoIcon from 'react-feather/dist/icons/user';
import BlogIcon from 'react-feather/dist/icons/file-text';
import ContactIcon from 'react-feather/dist/icons/mail';

const menu = [
  { label: 'Home', to: '/', ariaLabel: 'Home', icon: HomeIcon },
  { label: 'Blog', to: '/blog', ariaLabel: 'Blog', icon: BlogIcon },
  {
    label: 'Projects',
    to: '/projects',
    ariaLabel: 'Projects',
    icon: ProjectsIcon,
  },
  { label: 'About', to: '/about', ariaLabel: 'About Me', icon: InfoIcon },
  {
    label: 'Contact',
    to: '/contact',
    ariaLabel: 'Contact Me',
    icon: ContactIcon,
  },
];

export default menu;

import HomeIcon from 'react-feather/dist/icons/home';
import ProjectsIcon from 'react-feather/dist/icons/code';
import InfoIcon from 'react-feather/dist/icons/user';
import BlogIcon from 'react-feather/dist/icons/file-text';
import ContactIcon from 'react-feather/dist/icons/mail';

const menu = [
  { i18nId: 'menuHome', to: '/', ariaLabel: 'Home', icon: HomeIcon },
  { i18nId: 'menuBlog', to: '/blog', ariaLabel: 'Blog', icon: BlogIcon },
  {
    i18nId: 'menuProjects',
    to: '/projects',
    ariaLabel: 'Projects',
    icon: ProjectsIcon,
  },
  { i18nId: 'menuAbout', to: '/about', ariaLabel: 'About Me', icon: InfoIcon },
  {
    i18nId: 'menuContact',
    to: '/contact',
    ariaLabel: 'Contact Me',
    icon: ContactIcon,
  },
];

export default menu;

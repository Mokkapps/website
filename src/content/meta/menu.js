import HomeIcon from 'react-feather/dist/icons/home';
import ProjectsIcon from 'react-feather/dist/icons/code';
import InfoIcon from 'react-feather/dist/icons/user';
import BlogIcon from 'react-feather/dist/icons/file-text';
import ContactIcon from 'react-feather/dist/icons/mail';
import MessageCircleIcon from 'react-feather/dist/icons/message-circle';

const menu = [
  { i18nId: 'menu.home', to: '/', ariaLabel: 'Home', icon: HomeIcon },
  { i18nId: 'menu.blog', to: '/blog', ariaLabel: 'Blog', icon: BlogIcon },
  {
    i18nId: 'menu.projects',
    to: '/projects',
    ariaLabel: 'Projects',
    icon: ProjectsIcon,
  },
  {
    i18nId: 'menu.publications',
    to: '/publications',
    ariaLabel: 'Publications',
    icon: MessageCircleIcon,
  },
  { i18nId: 'menu.about', to: '/about', ariaLabel: 'About Me', icon: InfoIcon },
  {
    i18nId: 'menu.contact',
    to: '/contact',
    ariaLabel: 'Contact Me',
    icon: ContactIcon,
  },
];

export default menu;

import HomeIcon from 'react-feather/dist/icons/home';
import ProjectsIcon from 'react-feather/dist/icons/code';
import InfoIcon from 'react-feather/dist/icons/user';
import BlogIcon from 'react-feather/dist/icons/file-text';
import ContactIcon from 'react-feather/dist/icons/mail';

const menu = [
  { label: '', to: '/', ariaLabel: 'Home', icon: HomeIcon },
  { label: '', to: '/blog', ariaLabel: 'Blog', icon: BlogIcon },
  { label: '', to: '/projects', ariaLabel: 'Projects', icon: ProjectsIcon },
  { label: '', to: '/about', ariaLabel: 'About Me', icon: InfoIcon },
  { label: '', to: '/contact', ariaLabel: 'Contact Me', icon: ContactIcon },
];

export default menu;

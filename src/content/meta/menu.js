import HomeIcon from 'react-feather/dist/icons/home';
import ProjectsIcon from 'react-feather/dist/icons/code';
import InfoIcon from 'react-feather/dist/icons/user';
import BlogIcon from 'react-feather/dist/icons/file-text';
import ContactIcon from 'react-feather/dist/icons/mail';

const menu = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'Blog', to: '/blog', icon: BlogIcon },
  { label: 'Projects', to: '/projects', icon: ProjectsIcon },
  { label: 'About', to: '/about', icon: InfoIcon },
  { label: 'Contact', to: '/contact', icon: ContactIcon },
];

export default menu;

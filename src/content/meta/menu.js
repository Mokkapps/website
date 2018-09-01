import HomeIcon from 'react-feather/dist/icons/home';
import ProjectsIcon from 'react-feather/dist/icons/code';
import InfoIcon from 'react-feather/dist/icons/user';
import BlogIcon from 'react-feather/dist/icons/file-text';
import ContactIcon from 'react-feather/dist/icons/mail';

const menu = [
  { label: '', to: '/', icon: HomeIcon },
  { label: '', to: '/blog', icon: BlogIcon },
  { label: '', to: '/projects', icon: ProjectsIcon },
  { label: '', to: '/about', icon: InfoIcon },
  { label: '', to: '/contact', icon: ContactIcon },
];

export default menu;

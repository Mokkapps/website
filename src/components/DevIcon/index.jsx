import React from 'react';
import PropType from 'prop-types';

// classNames can be found at https://devicon.dev/
const devIcons = {
  javaScript: { class: 'devicon-javascript-plain', displayText: 'JavaScript' },
  cSharp: { class: 'devicon-csharp-line', displayText: 'C#' },
  dotNet: { class: 'devicon-dot-net-plain', displayText: '.NET' },
  typeScript: { class: 'devicon-typescript-plain', displayText: 'TypeScript' },
  java: { class: 'devicon-java-plain', displayText: 'Java' },
  css: { class: 'devicon-css3-plain', displayText: 'CSS3' },
  html: { class: 'devicon-html5-plain', displayText: 'HTML5' },
  angular: { class: 'devicon-angularjs-plain', displayText: 'Angular' },
  react: { class: 'devicon-react-original', displayText: 'React.js' },
  vue: { class: 'devicon-vuejs-plain', displayText: 'Vue.js' },
  node: { class: 'devicon-nodejs-plain', displayText: 'Node.js' },
  apple: { class: 'devicon-apple-original', displayText: 'Apple' },
  android: { class: 'devicon-android-plain', displayText: 'Android' },
  electron: { class: 'devicon-electron-original', displayText: 'Electron' },
  gatsby: { class: 'devicon-gatsby-plain', displayText: 'Gatsby.js' },
  firebase: { class: 'devicon-firebase-plain', displayText: 'Firebase' },
};

const DevIcon = ({ technology, colored = true, size, className }) => {
  const icon = devIcons[technology];
  return icon ? (
    <i
      title={icon.displayText}
      className={`${className} ${icon.class} ${colored && 'colored'} text-${
        size ? size : 'base'
      }`}
    />
  ) : (
    <span className={`${className} text-base text-main-text capitalize`}>
      {technology}
    </span>
  );
};

DevIcon.propTypes = {
  technology: PropType.string.isRequired,
  colored: PropType.bool,
  size: PropType.string,
  className: PropType.string,
};

export default DevIcon;

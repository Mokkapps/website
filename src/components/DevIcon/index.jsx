import React from 'react';
import PropType from 'prop-types';

const icons = {
  javaScript: 'devicon-javascript-plain',
  cSharp: 'devicon-csharp-line',
  dotNet: 'devicon-dot-net-plain-wordmark',
  typeScript: 'devicon-typescript-plain',
  java: 'devicon-java-plain-wordmark',
  css: 'devicon-css3-plain-wordmark',
  html: 'devicon-html5-plain-wordmark',
  angular: 'devicon-angularjs-plain',
  react: 'devicon-react-original-wordmark',
  vue: 'devicon-vuejs-plain-wordmark',
  node: 'devicon-nodejs-plain-wordmark',
};

const DevIcon = ({ technology, colored = true, className }) => {
  return icons[technology] ? (
    <i className={`${icons[technology]} ${colored && 'colored'} ${className}`} />
  ) : (
    <span className="capitalize">{technology}</span>
  );
};

DevIcon.propTypes = {
  technology: PropType.string.isRequired,
  colored: PropType.bool,
  className: PropType.string
};

export default DevIcon;

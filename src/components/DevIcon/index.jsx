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
  spring: { class: 'devicon-spring-plain', displayText: 'Spring Boot' },
  django: { class: 'devicon-django-plain', displayText: 'Django' },
  jenkins: { class: 'devicon-jenkins-plain', displayText: 'Jenkins' },
  kubernetes: { class: 'devicon-kubernetes-plain', displayText: 'Kubernetes' },
  jasmine: { class: 'devicon-jasmine-plain', displayText: 'Jasmine' },
  protractor: { class: 'devicon-protractor-plain', displayText: 'Protractor' },
  aws: {
    class: 'devicon-amazonwebservices-original',
    displayText: 'Amazon Web Services',
  },
  docker: { class: 'devicon-docker-plain', displayText: 'Docker' },
  git: { class: 'devicon-git-plain', displayText: 'Git' },
  graphQL: { class: 'devicon-graphql-plain', displayText: 'GraphQL' },
  python: { class: 'devicon-python-plain', displayText: 'Python' },
  cucumber: { class: 'devicon-cucumber-plain', displayText: 'Cucumber' },
  storybook: { class: 'devicon-storybook-plain', displayText: 'Storybook' },
  jest: { class: 'devicon-jest-plain', displayText: 'Jest' },
};

const DevIcon = ({
  technology,
  hideBackground = false,
  colored = false,
  size,
  className,
}) => {
  const icon = devIcons[technology];
  if (!icon) {
    return (
      <span className={`${className} text-base text-main-text capitalize`}>
        {technology}
      </span>
    );
  }

  return (
    <i
      title={icon.displayText}
      className={`${className} ${size || 'text-base'} ${
        hideBackground
          ? ''
          : 'shadow-md rounded-full px-2 py-1 bg-secondary-darken'
      } ${icon.class} ${colored && 'colored'}`}
    />
  );
};

DevIcon.propTypes = {
  technology: PropType.string.isRequired,
  colored: PropType.bool,
  hideBackground: PropType.bool,
  size: PropType.string,
  className: PropType.string,
};

export default DevIcon;

import React from 'react';
import Img from 'gatsby-image';
import TextLoop from 'react-text-loop';

import './About.scss';

import config from '../../content/meta/config';

const renderLoopableText = () => (
  <TextLoop mask springConfig={{ stiffness: 180, damping: 8 }}>
    {config.characteristics.map(c => (
      <p className="about__text--red">{c.text}</p>
    ))}
  </TextLoop>
);

export default ({ aboutImage }) => (
  <div className="about__container">
    <Img className="about__image" fixed={aboutImage.childImageSharp.fixed} />
    <div className="about__desc">
      <p className="about__text">
        My name is Michael Hoffmann and I am a {renderLoopableText()} from the
        Bavarian Forest and currently live in Munich.
      </p>
      <br />
      <p className="about__text">
        I publish my <a href="projects">private software projects</a> under the
        pseudonym
        <p className="about__text--red">Mokkapps.</p>
      </p>
      <br />
      <p className="about__text">
        I love programming but especially JavaScript, its ecosystem and
        possibilities. Therefore, I developed some{' '}
        <a href="projects">private projects</a> but I also work as a
        professional software developer at{' '}
        <a href="https://www.zeiss.com">ZEISS</a>.
      </p>
      <br />
      <p className="about__text">
        I like to share my knowledge with others. This is why I{' '}
        <a href="blog">write blog posts</a> and{' '}
        <a href="publications">do talks or write articles</a>.
      </p>
      <br />
      <p className="about__text">
        I also try to{' '}
        <a href="https://github.com/Mokkapps">share most of my projects</a> as I
        like the Open Source philosophy.
      </p>
      <br />
      <p className="about__text">
        If I am not working I play video games or do sports.
      </p>
    </div>
  </div>
);

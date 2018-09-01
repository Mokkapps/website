import React from 'react';
import Img from 'gatsby-image';
import TextLoop from 'react-text-loop';

import './About.scss';

import config from '../../content/meta/config';

const renderLoopableText = () => (
  <TextLoop
    mask
    springConfig={{ stiffness: 180, damping: 8 }}
  >
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
        I publish my private software projects under the pseudonym
        <p className="about__text--red">Mokkapps</p>
      </p>
      <br />
      <p className="about__text">
        Highly committed, agile personality with broad experience in the field
        of application development. Experience in working in agile team
        settings. Delivering excellent results and used to work under pressure.
      </p>
      <br />
      <p className="about__text">
        If I am not coding I play video games or do sports.
      </p>
    </div>
  </div>
);

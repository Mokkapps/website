import React from 'react';
import Img from 'gatsby-image';

import './About.scss';

export default ({ aboutImage }) => (
  <div className="about--container">
    <Img className="about--image" fixed={aboutImage.childImageSharp.fixed} />
    <div className="about--desc">
      <p className="about--text">
        I am a software developer from the Bavarian Forest and currently live in
        Munich.
      </p>
      <br />
      <p className="about--text">
        Highly committed, agile personality with broad experience in the field
        of application development. Experience in working in agile team
        settings. Delivering excellent results and used to work under pressure.
      </p>
      <br />
      <p className="about--text">
        I am very interested in development of mobile apps, websites and video
        games. If I am not coding I play videogames or do sports.
      </p>
    </div>
  </div>
);

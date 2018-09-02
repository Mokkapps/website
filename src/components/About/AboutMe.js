import React from 'react';
import Img from 'gatsby-image';

import './About.scss';

export default ({ aboutImage }) => (
  <div className="about__container">
    <Img className="about__image" fixed={aboutImage.childImageSharp.fixed} />
    <div className="about__desc">
      <p className="about__text">
        My name is Michael Hoffmann and I'm a software developer from the
        Bavarian Forest that currently lives in Munich. Mokkaps is the pseudonym
        behind my <a href="projects">private software projects</a> which are
        made with 100% passion.
      </p>
      <br />
      <p className="about__text">
        I really love programming – but especially JavaScript because of its
        ecosystem and possibilities. Therefore I totally enjoy developing{' '}
        <a href="projects">private projects</a> besides working as a
        professional software developer at{' '}
        <a href="https://www.zeiss.com">ZEISS</a>.
      </p>
      <br />
      <p className="about__text">
        The reason why I <a href="blog">write blog posts</a>,{' '}
        <a href="publications">do talks or write articles</a> is that I like to
        share my knowledge with others. Therefore, I also try to share most of
        my projects <a href="https://github.com/Mokkapps">via GitHub</a>.
      </p>
      <br />
      <p className="about__text">
        If I do not invest my time in coding I'm usually playing video games or
        doing sports.
      </p>
    </div>
  </div>
);

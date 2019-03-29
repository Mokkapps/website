import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';
import FluidImage from '../FluidImage';

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
`;

const AboutMe = ({ images }) => (
  <Container>
    <FluidImage image={images.intro} />
    <Margin top={2}>
      <SocialLinks data-cy="about-social-links">
        {config.socialLinks.map(link => (
          <SocialLink key={link.url} href={link.url} iconName={link.icon} />
        ))}
      </SocialLinks>
    </Margin>
    <Margin top={4}>
      <DescriptionContainer data-cy="about-description">
        <AboutParagraph>
          My name is Michael Hoffmann, a freelance web and app developer based
          in Munich/ Germany. I hold a Masters in Electrical Engineering from
          the reknown Technical University of Munich (TUM) and have{' '}
          {new Date().getFullYear() - 2015}+ years of professional experience.
        </AboutParagraph>
        <AboutParagraph>
          I work for businesses of all sizes and have experience with both small
          and medium enterprises and corporates. In my career I have developed,
          maintained and launched multiple projects from scratch or improved an
          existing code base. <a href="/contact">Get in touch</a>, if you like
          to receive a detailed list of projects I have worked on so far.
        </AboutParagraph>
        <AboutParagraph>
          Programming is my passion – but especially JavaScript/TypeScript
          because of its ecosystem and possibilities. Therefore I totally enjoy
          my work as a freelance developer and developing{' '}
          <a href="/projects">private projects</a> under the pseudonym Mokkapps.
          The reason why I <a href="/blog">write blog posts</a>,{' '}
          <a href="/publications">do talks or write articles</a> is that I like
          to share my knowledge with others. Therefore, I also try to share most
          of my projects <a href="https://github.com/Mokkapps">via GitHub</a>.
        </AboutParagraph>
        <AboutParagraph>
          If I do not invest my time in coding I'm usually playing video games
          or doing sports.
        </AboutParagraph>
        <AboutParagraph>
          Just <a href="/contact">contact me</a> if you would like me to work
          for you.
        </AboutParagraph>
      </DescriptionContainer>
    </Margin>
  </Container>
);

export default AboutMe;

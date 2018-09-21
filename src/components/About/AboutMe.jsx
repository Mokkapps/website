import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
`;

const Image = styled(Img)`
  border-radius: 50%;
`;

export default ({ aboutImage }) => (
  <Container>
    <Image
      alt="About Me"
      title="Myself"
      fixed={aboutImage.childImageSharp.fixed}
    />
    <Margin top={4}>
      <DescriptionContainer data-cy="about-description">
        <Text>
          My name is Michael Hoffmann and I'm a software developer from the
          Bavarian Forest that currently lives in Munich. Mokkaps is the
          pseudonym behind my <a href="projects">private software projects</a>{' '}
          which are made with 100% passion.
        </Text>
        <br />
        <Text>
          I really love programming – but especially JavaScript because of its
          ecosystem and possibilities. Therefore I totally enjoy developing{' '}
          <a href="projects">private projects</a> besides working as a
          professional software developer at{' '}
          <a href="https://www.zeiss.com">ZEISS</a>.
        </Text>
        <br />
        <Text>
          The reason why I <a href="blog">write blog posts</a>,{' '}
          <a href="publications">do talks or write articles</a> is that I like
          to share my knowledge with others. Therefore, I also try to share most
          of my projects <a href="https://github.com/Mokkapps">via GitHub</a>.
        </Text>
        <br />
        <Text>
          If I do not invest my time in coding I'm usually playing video games
          or doing sports.
        </Text>
      </DescriptionContainer>
    </Margin>
  </Container>
);

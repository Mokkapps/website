import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import content from '../../content/meta/config';
import SocialLink from '../SocialLink';
import { FormattedMessage } from 'react-intl';

const Container = styled.section`
  background-color: lightgray;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const Image = styled(Img)`
  width: 200px;
  height: 200px;
`;

const Name = styled.h3`
  text-align: center;
`;

const Text = styled.p`
  padding: 0 2rem 0.5rem 2rem;
  text-align: center;
  margin-bottom: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.2rem;
`;

const Author = ({ image }) => (
  <Container>
    <Image fluid={image.childImageSharp.fluid} />
    <Description>
      <Name>Michael Hoffmann</Name>
      <Text>
        <FormattedMessage id="shortSummary" />
      </Text>
      <SocialLinks className="mt-2">
        {content.socialLinks.map(link => (
          <SocialLink key={link.url} href={link.url} iconName={link.icon} />
        ))}
      </SocialLinks>
    </Description>
  </Container>
);

Author.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Author;

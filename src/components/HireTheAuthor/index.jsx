import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import { MokkappsLightGray } from '../../styles/variables';
import { customMedia } from '../../utils/style-utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  padding: 0.5rem;
  color: black;
  text-align: center;
  ${customMedia.greaterThan('lg')`
        font-size: 1rem;
    `};
  ${customMedia.lessThan('lg')`
        font-size: 0.5rem;
    `};
  letter-spacing: 2px;
`;

const Card = styled.a`
  width: 100%;
  display: flex;
  flex-flow: column;
  background-color: ${MokkappsLightGray};
  border-radius: 0.25rem;
  user-select: none;
  transition: 0.25s;

  &:hover {
    box-shadow: 0 6px 14px -3px rgba(0, 0, 0, 0.75);
    transform: translateY(-0.2rem);
    text-decoration: none;
  }
`;

const HireTheAuthor = ({ image }) => (
  <Wrapper data-cy="hire-the-author">
    <Card href="/contact">
      <Img fluid={image.childImageSharp.fluid} />
      <Description>
        <FormattedMessage id="shortSummary"></FormattedMessage>
      </Description>
    </Card>
  </Wrapper>
);

HireTheAuthor.propTypes = {
  image: PropTypes.object
};

export default HireTheAuthor;

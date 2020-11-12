import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import { customMedia } from '../../utils/style-utils';
import { sendCustomAnalyticsEvent } from '../../utils/helper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  padding: 0.5rem;
  color: var(--text-main);
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
  background-color: var(--secondary);
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
    <Card
      href="/contact"
      onClick={() => sendCustomAnalyticsEvent('Hire the author card clicked')}
    >
      <Img fluid={image.childImageSharp.fluid} />
      <Description>
        <FormattedMessage id="shortSummary"></FormattedMessage>
      </Description>
    </Card>
  </Wrapper>
);

HireTheAuthor.propTypes = {
  image: PropTypes.object,
};

export default HireTheAuthor;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { customMedia } from '../../utils/style-utils';

const Header = styled.header`
  text-align: center;

  h1 {
    letter-spacing: -0.03em;
    margin-bottom: 0.5em;
    line-height: 1.1;
    font-size: 2.8em;
    ${customMedia.lessThan('md')`
     font-size: 2.4em;
    `};
  }
`;

const Heading = props => {
  const { title, children } = props;

  return <Header>{title ? <h1>{title}</h1> : children}</Header>;
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;

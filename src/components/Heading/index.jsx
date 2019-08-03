import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { customMedia } from '../../utils/style-utils';
import { FormattedMessage } from 'react-intl';

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
  const { title, children, i18nId } = props;

  if (i18nId) {
    return (
      <Header>
        <h1>
          <FormattedMessage id={i18nId} />
        </h1>
      </Header>
    );
  }

  return <Header>{title ? <h1>{title}</h1> : children}</Header>;
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  i18nId: PropTypes.string,
};

export default Heading;

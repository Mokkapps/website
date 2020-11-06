import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Header = styled.header`
  text-align: center;
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

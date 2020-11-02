import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './link-styles.scss';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkButton = ({ dataCy, href, i18nId, props }) => (
  <Wrapper {...props} data-cy={dataCy}>
    <a className="hero-link" href={href}>
      <span className="text">
        <FormattedMessage id={i18nId} />
      </span>
      <span className="line -right" />
      <span className="line -top" />
      <span className="line -left" />
      <span className="line -bottom" />
    </a>
  </Wrapper>
);

LinkButton.propTypes = {
  dataCy: PropTypes.string.isRequired,
  i18nId: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  props: PropTypes.node,
};

export default LinkButton;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './link-styles.scss';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkButton = ({ dataCy, href, i18nId, className }) => (
  <Wrapper className={className} data-cy={dataCy}>
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
  className: PropTypes.string,
};

export default LinkButton;

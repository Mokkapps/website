import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import appStoreImage from '../../images/badge_app_store.svg';
import googlePlayStoreImage from '../../images/badge_google_play_store.svg';

const Container = styled.div`
  display: inline-block;
  border-radius: 2px;
  height: ${props => `${props.height}px`};
  width: 240px;
`;

const StyledAnchor = styled.a`
  background: ${props => `url(${imageLinks[props.store]}) no-repeat`};
  background-size: contain;
  display: inline-block;
  height: 100%;
  width: 100%;

  &:hover {
    background-size: contain;
  }
`;

const imageLinks = {
  ios: appStoreImage,
  android: googlePlayStoreImage,
};

class AppStoreButton extends React.Component {
  static propTypes = {
    store: PropTypes.oneOf(['ios', 'android']).isRequired,
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  };
  static defaultProps = {
    height: 75,
    width: 255,
  };

  render() {
    const { store, url, height, width, className } = this.props;
    return (
      <Container height={height} width={width} className={className}>
        <StyledAnchor
          store={store}
          href={url}
          aria-label={`Get it on ${store}`}
          alt={`Get it on ${store}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;
        </StyledAnchor>
      </Container>
    );
  }
}

export default AppStoreButton;

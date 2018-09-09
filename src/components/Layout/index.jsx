import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 15px 25px;
  background: #424242;
`;

const Layout = props => {
  const { children } = props;

  return (
    <Container>
      <ScrollUpButton />
      <main>{children}</main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

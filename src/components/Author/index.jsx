import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px 0;
`;

const Author = props => {
  const { html } = props;

  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

Author.propTypes = {
  html: PropTypes.string,
};

export default Author;

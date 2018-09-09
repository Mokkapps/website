import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledArticle = styled.article`
  max-width: 600px;
  margin: 0 auto 30px;

  background: white;
  border-radius: 10px;
  padding: 2rem;
  min-width: ${props => (props.narrow ? '50%' : '100%')};
`;

const Article = props => {
  const { children } = props;
  return <StyledArticle>{children}</StyledArticle>;
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;

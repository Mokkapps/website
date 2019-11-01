import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HireTheAuthor from '../HireTheAuthor';
import { customMedia } from '../../utils/style-utils';

const Wrapper = styled.section`
  display: flex;
  margin: 0 auto 30px;
  background: white;
  border-radius: 10px;
  padding: 2rem;
`;

const StyledArticle = styled.article`
  flex: 5;
`;

const StyledAside = styled.aside`
  ${customMedia.lessThan('lg')`
     display: none;
  `};
  padding: 1rem;
  flex: 1;
`;

const AsideContent = styled.div`
  position: sticky;
  top: 0;
`;

const ArticleWithSidebar = ({ children, authorImage }) => (
  <Wrapper>
    <StyledArticle>{children}</StyledArticle>
    <StyledAside>
      <AsideContent>
        <HireTheAuthor image={authorImage}></HireTheAuthor>
      </AsideContent>
    </StyledAside>
  </Wrapper>
);

ArticleWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  authorImage: PropTypes.object.isRequired,
};

export default ArticleWithSidebar;

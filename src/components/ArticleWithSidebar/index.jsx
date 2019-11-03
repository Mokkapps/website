import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Margin } from 'styled-components-spacing';

import HireTheAuthor from '../HireTheAuthor';
import { customMedia } from '../../utils/style-utils';
import CategorySelection from '../CategorySelection';

const Wrapper = styled.section`
  display: flex;
  margin: 0 auto 30px;
  background: white;
  border-radius: 10px;
  padding: 2rem;
`;

const Heading = styled.h3`
  padding: 0.5rem;
  margin-bottom: 0;
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

const ArticleWithSidebar = ({ children, authorImage, categories }) => (
  <Wrapper>
    <StyledArticle>{children}</StyledArticle>
    <StyledAside>
      <AsideContent>
        <Heading>
          <FormattedMessage id="hireTheAuthor" />
        </Heading>
        <HireTheAuthor image={authorImage}></HireTheAuthor>
        <Margin top={3}>
          <Heading>
            <FormattedMessage id="otherCategories" />
          </Heading>
          <CategorySelection categories={categories} />
        </Margin>
      </AsideContent>
    </StyledAside>
  </Wrapper>
);

ArticleWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  authorImage: PropTypes.object.isRequired,
  categories: PropTypes.array,
};

export default ArticleWithSidebar;

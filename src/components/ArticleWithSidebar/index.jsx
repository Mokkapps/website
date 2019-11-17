import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Margin } from 'styled-components-spacing';

import HireTheAuthor from '../HireTheAuthor';
import { customMedia } from '../../utils/style-utils';
import CategorySelection from '../CategorySelection';

const Wrapper = styled.section`
  display: grid;

  ${customMedia.lessThan('xlg')`
    grid-template-columns: minmax(0, auto);
    grid-template-areas: 'content';
  `};
  ${customMedia.greaterThan('xlg')`
    grid-template-columns: 1fr minmax(0, 800px) 1fr;
    grid-template-areas: 'left content sidebar';
  `}
  background: white;
  border-radius: 10px;
  padding: 2rem;
`;

const Heading = styled.h3`
  padding: 0.5rem;
  margin-bottom: 0;
`;

const LeftSide = styled.div`
  grid-area: left;
  ${customMedia.lessThan('xlg')`
    display: none;
  `};
`;

const StyledArticle = styled.article`
  grid-area: content;
  ${customMedia.between('lg', 'xlg')`
    max-width: 700px;
    margin: 0 auto;
  `};
`;

const StyledAside = styled.aside`
  ${customMedia.lessThan('xlg')`
    display: none;
  `};
  grid-area: sidebar;
  padding: 1rem;
  margin: 0 auto;
`;

const AsideContent = styled.div`
  position: sticky;
  top: 0;
  max-width: 200px;
`;

const ArticleWithSidebar = ({ children, authorImage, categories }) => (
  <Wrapper>
    <LeftSide></LeftSide>
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

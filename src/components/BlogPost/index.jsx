import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Meta from '../Meta';
import { customMedia } from '../../utils/style-utils';

import './styles.scss';

const Post = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    h3 {
      text-decoration: underline;
    }

    a {
      text-decoration: none;
    }
  }

  p {
    line-height: 1.4;
    color: black;
  }

  ${customMedia.between('xs', 'lg')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`;

const Text = styled(Link)`
  width: 60%;
  ${customMedia.between('xs', 'lg')`
    width: 100%;
  `};
`;

export default ({
  slug,
  cover,
  title,
  categories,
  prefix,
  author,
  metaIcons,
  excerpt,
}) => (
  <Post key={slug}>
    {cover ? (
      <Img outerWrapperClassName="image" fluid={cover.childImageSharp.fluid} />
    ) : null}
    <Text to={`/blog${slug}`}>
      <h3>{title}</h3>
      <Meta
        categories={categories}
        prefix={prefix}
        author={author}
        categoryLink={false}
        icons={metaIcons}
      />
      <p>{excerpt}</p>
    </Text>
  </Post>
);

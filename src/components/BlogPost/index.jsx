import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';

import Meta from '../Meta';
import { customMedia } from '../../utils/style-utils';

import './styles.scss';

const Post = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  text-decoration: none;
  background-size: 100% 0;
  background: var(--secondary);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background-size: 100% 0;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }

  p {
    line-height: 1.4;
    color: var(--text-main);
  }

  ${customMedia.between('xs', 'lg')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  `};
`;

const Text = styled.div`
  width: 60%;
  ${customMedia.between('xs', 'lg')`
    width: 100%;
  `};
`;

const BlogPost = ({
  id,
  slug,
  cover,
  title,
  categories,
  prefix,
  author,
  metaIcons,
  excerpt,
  className,
}) => (
  <Post
    className={className}
    to={`/blog${slug}`}
    data-cy={`blog-post-${id}`}
    key={slug}
  >
    {cover ? (
      <Img className="image" fluid={cover.childImageSharp.fluid} />
    ) : null}
    <Text>
      <h2>{title}</h2>
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

BlogPost.propTypes = {
  author: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  metaIcons: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlogPost;

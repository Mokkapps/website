import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';

import Meta from '../Meta';
import { customMedia } from '../../utils/style-utils';
import { MokkappsRed } from '../../styles/variables';

import './styles.scss';

const Post = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  a {
      text-decoration: none;
      background-size: 100% 0;
      }
    }

  h3 {
      text-decoration: none;
      background-image: linear-gradient(${MokkappsRed}, ${MokkappsRed});
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 0 2px;
      transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;
    }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    
    h3 {
      text-decoration: none;
      background-size: 100% 2px;
    }

    a {
      text-decoration: none;
      background-size: 100% 0;
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
    padding: 5px;
  `};
`;

const Text = styled(Link)`
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
}) => (
  <Post key={slug}>
    {cover ? (
      <Img className="image" fluid={cover.childImageSharp.fluid} />
    ) : null}
    <Text to={`/blog${slug}`} data-cy={`blog-post-${id}`}>
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

BlogPost.propTypes = {
  author: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  metaIcons: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BlogPost;

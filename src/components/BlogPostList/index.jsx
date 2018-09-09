import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Meta from '../Meta';
import { MokkappsRed } from '../../styles/variables';
import { customMedia } from '../../utils/style-utils';

import './styles.scss';

const Container = styled.div`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
  }

  li {
    padding: 0 0 2.5em;

    &:hover {
      h3 {
        text-decoration: underline;
      }
    }
  }

  h3 {
    font-size: 1.6em;
    margin-bottom: 0.5em;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${MokkappsRed};
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  p {
    line-height: 1.4;
    color: black;
  }
`;

const Post = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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

const BlogPostList = props => {
  const { items, author, metaIcons } = props;

  return (
    <Container>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title, categories, cover },
            fields: { slug, prefix },
            excerpt,
          } = item;

          return (
            <Post key={slug}>
              {cover ? (
                <Img
                  outerWrapperClassName="image"
                  fluid={cover.childImageSharp.fluid}
                />
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
        })}
      </ul>
    </Container>
  );
};

BlogPostList.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  metaIcons: PropTypes.object,
};

export default BlogPostList;

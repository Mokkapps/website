import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import HeaderLogo from '../components/HeaderLogo';
import config from '../content/meta/config';

const width = config.socialShareImage.width;
const height = config.socialShareImage.height;

const GlobalPageStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: white;
  }
  html {
    background-color: white;
  }
`;

const Wrapper = styled.div`
  width: ${props => props.width || width}px;
  height: ${props => props.height || height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  background-color: var(--background);
  position: relative;
`;

const Square = styled.div`
  width: ${props => props.width || width}px;
  height: ${props => props.height || height}px;
  position: absolute;
  outline: 3px solid var(--text-main) !important;
  outline-offset: -25px;
`;

const Preview = styled.div`
  width: ${props => props.width || width}px;
  height: ${props => props.height || height}px;
  background-image: url('${props =>
    props.hero || withPrefix(props.siteCover)}');
  background-position: center;
  background-size: cover;
  position: absolute;
  opacity: 0.5;
`;

const BlogPostShareImage = props => {
  const { post } = props.data;
  const darkMode = true;
  const showPreview = true;
  const title = post.frontmatter.title;

  return (
    <Wrapper
      className={`${darkMode ? 'theme-dark' : 'theme-light'}`}
      width={width}
      height={height}
    >
      <GlobalPageStyle />

      <div className="flex flex-col justify-center h-full p-6">
        <h1 className="flex items-center flex-grow text-center text-main-text text-10xl mx-8 mt-4 text-shadow z-10">
          {title}
        </h1>
        <div className="flex justify-between items-center w-full px-4 py-2 z-10">
          <HeaderLogo textClassName="text-shadow" />
          <span className="text-xl font-bold text-shadow text-main-text">
            {post.timeToRead} min read
          </span>
        </div>
      </div>
      {showPreview && (
        <Preview
          className="z-0"
          width={width}
          height={height}
          siteCover={post.frontmatter.cover.childImageSharp.fixed.src}
        />
      )}
      <Square className="square" width={width} height={height} />
    </Wrapper>
  );
};

export default BlogPostShareImage;

export const pageQuery = graphql`
  query BlogPostShareImage($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        canonical
        categories
        cover {
          childImageSharp {
            fixed(width: 1200, height: 628) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
      timeToRead
    }
  }
`;

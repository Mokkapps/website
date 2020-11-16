import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import config from '../content/meta/config';
import HeaderLogo from '../components/HeaderLogo';

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
  width: ${props => props.width || 440}px;
  height: ${props => props.height || 220}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  background-color: var(--background);
  position: relative;
`;

const Square = styled.div`
  width: ${props => props.width || 440}px;
  height: ${props => props.height || 220}px;
  position: absolute;
  outline: 3px solid var(--text-main) !important;
  outline-offset: -25px;
`;

const Preview = styled.div`
  width: ${props => props.width || 440}px;
  height: ${props => props.height || 220}px;
  background-image: url('${props =>
    props.hero || withPrefix(props.siteCover)}');
  background-position: center;
  background-size: cover;
  position: absolute;
  opacity: 0.5;
`;

const BlogPostShareImage = props => {
  const { post, authorImage } = props.data;
  console.log('props', props);
  const darkMode = true;
  const width = 440;
  const height = 220;
  const title = post.frontmatter.title;
  // const post = props.data.post;
  // const { width, height } = props.pageContext;
  // const { siteCover, authorAvatar, headerTitle } = { siteCover: 'siteCover', authorAvatar: 'authorAvatar', headerTitle: 'headerTitle' };
  // const { fixed } = useSiteImages(authorAvatar);
  // const siteCoverPath = useSiteImages(siteCover).fluid.src;

  return (
    <Wrapper
      className={darkMode ? 'theme-dark' : 'theme-light'}
      width={width}
      height={height}
    >
      <GlobalPageStyle />

      <div className="flex justify-center absolute left-logo-left top-logo-top z-20 bg-secondary rounded-lg">
        <HeaderLogo imageClassName="pl-2" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-main-text text-2xl mx-8 mt-4 text-shadow z-10">
          {title}
        </h1>
        <span className="text-md font-bold text-shadow text-main-text z-10">
          {post.timeToRead} min read
        </span>
      </div>
      <Preview
        className="z-0"
        width={width}
        height={height}
        siteCover={post.frontmatter.cover.childImageSharp.fluid.src}
      />
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
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      timeToRead
    }
    authorImage: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

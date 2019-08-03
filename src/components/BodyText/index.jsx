import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 50px;
  min-height: 40vh;

  img {
    width: 60%;
    display: flex;
    margin: 0 auto;
  }

  & .gatsby-resp-image-wrapper {
    margin: 2em 0;
  }

  p {
    line-height: 1.6;
    margin: 0 0 1.5em;
    font-size: 1.1em;
  }

  ul,
  ol {
    margin: 0 0 1.5em;
    list-style-position: inside;
  }

  li {
    margin: 0.8em 0;
    font-size: 1.1em;
    line-height: 1.3;
    padding-left: 5px;
  }

  h2,
  h3 {
    line-height: 1.2;
    margin: 1.5em 0 0.8em;
    letter-spacing: -0.01em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.6em;
  }

  pre {
    margin: 0 0 1.5em;
  }

  blockquote {
    padding-left: 20px;
    border-left: 5px solid #ddd;
    font-style: italic;
  }
`;

const HtmlContainer = styled(Container)`
  img {
    width: inherit;
  }
`;

const BodyText = props => {
  const { html, children } = props;

  return (
    <React.Fragment>
      {html ? (
        <HtmlContainer dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <Container>{children}</Container>
      )}
    </React.Fragment>
  );
};

BodyText.propTypes = {
  html: PropTypes.string,
  children: PropTypes.node
};

export default BodyText;

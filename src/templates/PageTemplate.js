import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '@react-website-themes/default/components/Header';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';
import Heading from '@react-website-themes/default/components/Heading';
import Bodytext from '@react-website-themes/default/components/Bodytext';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageArticle from '../components/PageArticle';

import 'prismjs/themes/prism-okaidia.css';
import '../styles/global';
import '../styles/variables';

const PageTemplate = props => {
  const {
    data: {
      page: {
        html: pageHTML,
        frontmatter: { title },
        fields: { slug },
        excerpt,
      }
    },
  } = props;

  const { siteUrl, siteLanguage, siteTitlePostfix } = config;

  return (
    <Layout>
      <Header>
        <Menu/>
      </Header>
      <PageArticle>
        <Heading title={title} />
        <Bodytext html={pageHTML} />
      </PageArticle>
      <Footer />
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fileAbsolutePath
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        categories
      }
    }
  }
`;

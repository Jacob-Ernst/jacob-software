import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import BlogList from '../components/blogList';

export const query = graphql`
  query BlogIndexQuery {
    prismic {
      allBlog_posts(sortBy: release_date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            release_date
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.prismic.allBlog_posts.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <BlogList posts={posts} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

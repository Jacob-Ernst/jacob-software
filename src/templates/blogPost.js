import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Slices from './slices';

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismic {
      allBlog_posts(uid: $uid) {
        edges {
          node {
            title
            _meta {
              uid
            }
            body {
              ... on PRISMIC_Blog_postBodyText {
                primary {
                  text
                }
                label
                type
              }
              ... on PRISMIC_Blog_postBodyQuote {
                primary {
                  quote
                }
                label
                type
              }
              ... on PRISMIC_Blog_postBodyImage {
                type
                primary {
                  image
                  caption
                }
                label
              }
            }
            body1 {
              ... on PRISMIC_Blog_postBody1General_card {
                primary {
                  description
                  title
                }
              }
            }
            _linkType
            release_date
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  const doc = data.prismic.allBlog_posts.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <Layout>
      <SEO title={doc.node.body1[0].primary.title[0].text} />
      <div>
        {RichText.render(doc.node.title)}
        <Slices slices={doc.node.body} />
      </div>
    </Layout>
  );
};

export default BlogPost;

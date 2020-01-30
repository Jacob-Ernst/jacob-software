import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

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
              }
              ... on PRISMIC_Blog_postBodyQuote {
                primary {
                  quote
                }
              }
              ... on PRISMIC_Blog_postBodyImage {
                type
                primary {
                  image
                }
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
          }
        }
      }
    }
  }
`;

const BlogPost = props => {
  const doc = props.data.prismic.allBlog_posts.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <div>
      {RichText.render(doc.node.title)}
      {RichText.render(doc.node.body[1].primary.text)}
    </div>
  );
};

export default BlogPost;

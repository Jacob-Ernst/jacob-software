import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';

import { linkResolver } from '../utils/linkResolver';

const BlogList = ({ posts }) => {
  if (!posts) return null;
  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.node._meta.id}>
            <Link to={linkResolver(post.node._meta)}>
              {RichText.asText(post.node.title)}
            </Link>
            <p>
              <time>{post.node.date}</time>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogList;

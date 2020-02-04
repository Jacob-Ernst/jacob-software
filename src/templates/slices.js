import React from 'react';
import { RichText } from 'prismic-reactjs';
import Img from 'gatsby-image';

const Slices = ({ slices }) => {
  return slices.map((slice, index) => {
    switch (slice.type) {
      case 'image':
        if (slice.primary.imageSharp.childImageSharp) {
          return (
            <Img
              fluid={slice.primary.imageSharp.childImageSharp.fluid}
              key={index}
              alt={slice.primary.image.alt || ''}
              copyright={slice.primary.image.copyright || ''}
            />
          );
        } else {
          return (
            <img
              src={slice.primary.image.url}
              alt={slice.primary.image.alt || ''}
              copyright={slice.primary.image.copyright || ''}
              key={index}
            />
          );
        }
      case 'text':
        return <RichText render={slice.primary.text} key={index} />;
      case 'quote':
        return <RichText render={slice.primary.quote} key={index} />;
      default:
        return null;
    }
  });
};

export default Slices;

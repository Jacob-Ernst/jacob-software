/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.scss';

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');

const { linkResolver } = require('./src/utils/linkResolver');

registerLinkResolver(linkResolver);

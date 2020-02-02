if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });
}

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.js'],
  whitelist: ['body', 'html'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  siteMetadata: {
    title: `Jacob Software`,
    description: `Software by Jacob`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',

      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME, // (REQUIRED, replace with your own)
        accessToken: process.env.PRISMIC_API_TOKEN, // (optional API access token)
        previews: false, // (optional, activated Previews. Default: false)
        pages: [
          {
            type: 'Blog_post', // TypeName from prismic
            match: '/blog/:uid', // Pages will be generated under this pattern
            path: '/blog-preview', // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/blogPost.js')
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require('tailwindcss'),
          ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};

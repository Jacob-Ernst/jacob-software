/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

exports.onPreRenderHTML = function name(
  { getHeadComponents, replaceHeadComponents },
  _pluginOptions
) {
  const oldComponents = getHeadComponents();
  const newHeadComponents = oldComponents.filter(
    item => item.key !== 'prismic-config'
  );
  replaceHeadComponents(newHeadComponents);
};

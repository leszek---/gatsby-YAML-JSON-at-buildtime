const getDataFromJson = require('./getDataFromJson');

const data = getDataFromJson();
const index = [{
  path: '/',
  text: 'Index',
}];

const dynamic = data.pages.map(p => ({ 
  path: p.pagePath,
  text: p.title,
  })
);
const paths = [...index, ...dynamic];

module.exports = {
  siteMetadata: {
    title: 'Leszek Gatsby Page',
    paths,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
};
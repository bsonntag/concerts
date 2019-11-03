require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Benjamim Sonntag - Concert diary',
    description: "A list of the music concerts I've been to.",
    author: 'Benjamim Sonntag',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'un2l5tfpi9f5',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Benjamim Sonntag - Concert diary',
        short_name: 'Concert diary',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
  ],
};

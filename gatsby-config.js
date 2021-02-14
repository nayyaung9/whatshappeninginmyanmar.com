module.exports = {
  siteMetadata: {
    title: "What is happening in Myanmar",
    siteUrl: `https://www.gatsbyjs.com`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/contents`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

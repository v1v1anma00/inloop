module.exports = {
  siteMetadata: {
    title: `inLoop`,
    titleTemplate: `%s • inLoop`,
    description: `Keeping youth in the loop on what is happening around the world, one challenge at a time.`,
    url: `https://inloop.today`,
    image: ``,
    twitterUsername: ``,
    instagramUsername: `inloop.ja`,
    linkedinUsername: `inloopja`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
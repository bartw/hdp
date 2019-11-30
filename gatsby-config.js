module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haskey Development Program`,
        short_name: `HDP`,
        start_url: `/`,
        background_color: `#266dd3`,
        theme_color: `#353535`,
        display: `standalone`,
        icon: `src/images/haskey.svg`
      }
    }
  ]
};

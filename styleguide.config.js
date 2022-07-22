module.exports = {
  components: "src/components/**/[A-Z]*.js",
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.d.ts",
    "**/components/*/Style.js",
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
};

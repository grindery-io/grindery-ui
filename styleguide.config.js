const path = require("path");
module.exports = {
  title: "Grindery Nexus\nUI Styleguide",
  sections: [
    {
      name: "Get started",
      content: "GETSTARTED.md",
    },
    {
      name: "Components",
      components: "src/components/**/[A-Z]*.js",
      ignore: [
        "**/__tests__/**",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/*.spec.{js,jsx,ts,tsx}",
        "**/*.d.ts",
        "**/components/*/Style.js",
        "**/components/ThemeProvider/**",
      ],
      exampleMode: "collapse",
      usageMode: "expand",
    },
    {
      name: "Theme",
      content: "THEMING.md",
      components: "src/components/ThemeProvider/[A-Z]*.js",
      ignore: [
        "**/__tests__/**",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/*.spec.{js,jsx,ts,tsx}",
        "**/*.d.ts",
        "**/components/*/Style.js",
      ],
      exampleMode: "collapse",
      usageMode: "expand",
    },
    {
      name: "Source code",
      href: "https://github.com/grindery-io/grindery-ui",
      external: true,
    },
  ],
  styleguideDir: "./docs",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
  template: {
    favicon:
      "https://raw.githubusercontent.com/grindery-io/grindery-ui/master/assets/favicon.ico",
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
  theme: "./styleguide/themes.js",
  styles: "./styleguide/styles.js",
  styleguideComponents: {
    Logo: path.join(__dirname, "styleguide/LogoRenderer"),
  },
  ribbon: {
    text: "Beta",
  },
};

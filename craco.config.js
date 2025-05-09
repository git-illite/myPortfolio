const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Extend the include paths for babel-loader
      const oneOfRule = webpackConfig.module.rules.find((rule) =>
        rule.oneOf
      );

      if (oneOfRule) {
        oneOfRule.oneOf.forEach((rule) => {
          if (
            rule.include &&
            rule.include instanceof Array &&
            rule.include.find((includePath) => includePath.includes("src"))
          ) {
            rule.include.push(
              path.resolve(__dirname, "node_modules/@headlessui")
            );
          }
        });
      }

      return webpackConfig;
    },
  },
};

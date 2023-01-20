const path = require("path");
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

module.exports = {
  plugins: [
    new MergeJsonWebpackPlugin({
      // encoding: "ascii",
      debug: true,
      output: {
        groupBy: [
          {
            pattern: "./src/en_us/*",
            fileName: "en_us.json",
          },
          {
            pattern: "./src/sp/*",
            fileName: "sp.json",
          },
          {
            pattern: "./src/pt/*",
            fileName: "pt.json",
          },
          {
            pattern: "./src/en_uk/*",
            fileName: "en_uk.json",
          },
        ],
      },
    }),
  ],
};

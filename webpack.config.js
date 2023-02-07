const path = require("path");
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

const patterns = [];
['ac', 'af', 'hs', 'lx', 'wr', 'sm', 'sg', 'inch', 'sf', 'aw'].map((b) => {
  patterns.push(
    {
      pattern: `./src/**/${b}/en_us.json`,
      fileName: `brand/${b}_en_us.json`,
    }
  );
});

module.exports = {
  plugins: [
    new MergeJsonWebpackPlugin({
      // encoding: "ascii",
      debug: true,
      output: {
        groupBy: [...patterns,
          {
            pattern: `./src/**/sm/sp.json`,
            fileName: `brand/sm_sp.json`,
          }
        ],
      },
    }),
  ],
};

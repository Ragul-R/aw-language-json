const path = require("path");
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

const patterns = [];
['ac', 'af', 'hs', 'lx', 'wr', 'sm', 'sg', 'inch', 'sf', 'aw', 'lp'].map((b) => {
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
          },
          {
            pattern: `./src/**/inch/pl.json`,
            fileName: `brand/inch_pl.json`,
          },
          {
            pattern: `./src/**/inch/en_uk.json`,
            fileName: `brand/inch_en_uk.json`,
          },
          {
            pattern: `./src/**/sm/en_uk.json`,
            fileName: `brand/sm_en_uk.json`,
          },
          {
            pattern: `./src/**/sm/pt.json`,
            fileName: `brand/sm_pt.json`,
          },
          {
            pattern: `./src/**/inch/sp.json`,
            fileName: `brand/inch_sp.json`,
          },
          {
            pattern: `./src/**/inch/sp.json`,
            fileName: `brand/inch_pt.json`,
          },
        ],
      },
    }),
    new MergeJsonWebpackPlugin({
      files: ["./src/integrations/sm/en_us.json", "./src/settings/sm/en_us.json", "./src/common/sm/en_us.json"],
      output: {
          fileName: "/brand/mobile_en_us.json",
      },
    }),
    new MergeJsonWebpackPlugin({
      files: ["./src/integrations/sm/sp.json", "./src/settings/sm/sp.json", "./src/common/sm/sp.json"],
      output: {
          fileName: "/brand/mobile_sp.json",
      },
    }),
    new MergeJsonWebpackPlugin({
      files: ["./src/integrations/sm/pt.json", "./src/settings/sm/pt.json", "./src/common/sm/pt.json"],
      output: {
          fileName: "/brand/mobile_pt.json",
      },
    })
  ],
};

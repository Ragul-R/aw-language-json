function plop(plop) {
  // controller generator
  plop.setGenerator("add language", {
    description: "aw components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "enter the component name",
      },
    ],
    actions: (ans) => {
      const action = [];
      const { name } = ans || {};
      if (!name) {
        return ans;
      }
      const brands = [
        "an",
        "af",
        "hs",
        "lx",
        "wr",
        "sf",
        "sg",
        "sm",
        "inch",
        "atc",
      ];
      action.push({
        type: "add",
        path: `./src/${name}/index.js`,
        templateFile: "./plop-templates/src/index.js.hbs",
      });
      action.push({
        type: "append",
        path: `./src/index.js`,
        pattern: "/* PLOP_INJECT_IMPORT */",
        template: `import * as ${name} from './${name}';`,
      });
      brands.map((brand) => {
        action.push(
          {
            type: "addMany",
            templateFiles: "./plop-templates/src/brand/**",
            base: "./plop-templates/src/brand/",
            destination: `./src/${name}/${brand}`,
          },
          {
            type: "append",
            path: `./src/${name}/index.js`,
            pattern: "/* PLOP_INJECT_IMPORT */",
            template: `import * as ${brand} from './${brand}';`,
          },
          {
            type: "append",
            path: `./src/${name}/index.js`,
            pattern: "/* PLOP_INJECT_EXPORT */",
            template: `  ${brand},`,
          }
        );
      });

      return action;
    },
  });
}

export default plop;

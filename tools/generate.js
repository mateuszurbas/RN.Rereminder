const { generateTemplateFiles } = require("generate-template-files");

generateTemplateFiles([
  {
    option: "component",
    defaultCase: "(pascalCase)",
    entry: {
      folderPath: "./tools/templates/component",
    },
    stringReplacers: ["__name__"],
    output: {
      path: "./src/components/__name__(kebabCase)",
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
]);

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require using import * as some from '' instead of default import",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.specifiers.some((specifier) => specifier.type === "ImportDefaultSpecifier")) {
          context.report({
            node,
            message: "Use import * as some from '' instead of default import",
          });
        }
      },
    };
  },
};

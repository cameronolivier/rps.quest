/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  importOrder: [
    "^~/(.*)$",
    "^[\\.\\./]",
    "^[\\./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: false,
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports"), require.resolve("prettier-plugin-tailwindcss")],

};

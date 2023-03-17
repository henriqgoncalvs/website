/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  endOfLine: "auto",
  singleQuote: true,
  printWidth: 65,
  tabWidth: 2,
  trailingComma: "es5",
};

module.exports = config;

const { prettierConfig } = require('poetic');

module.exports = {
  ...prettierConfig,
  singleQuote: true,
  printWidth: 80,
  bracketSpacing: true,
  tabWidth: 2,
  jsxBracketSameLine: true,
  trailingComma: 'none',
  useTabs: false
};

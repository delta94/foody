const { prettierConfig } = require('poetic')

module.exports = {
  ...prettierConfig,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "tabWidth": 2
}

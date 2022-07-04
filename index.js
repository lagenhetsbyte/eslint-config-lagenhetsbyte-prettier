module.exports = {
  endOfLine: 'auto',
  trailingComma: 'none',
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        tabWidth: 2,
        singleQuote: false
      }
    }
  ],
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid'
};

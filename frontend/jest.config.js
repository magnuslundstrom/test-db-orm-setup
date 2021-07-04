const { resolve } = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/lib/**', '!**/vendor/**'],

  // used for for the jest runner to resolve our import paths
  moduleNameMapper: {
    '^@contexts/(.*)$': resolve(__dirname, './src/utils/contexts/$1'),
    '^@components/(.*)$': resolve(__dirname, './src/components/$1'),
    '^@hooks/(.*)$': resolve(__dirname, './src/hooks/$1'),
    '^@utils/(.*)$': resolve(__dirname, './src/utils/$1'),
    '^@variables': resolve(__dirname, './src/styles/variables'),
    '^@blocks': resolve(__dirname, './src/styles/blocks'),
    '^@elements': resolve(__dirname, './src/styles/elements'),
    '^@constants': resolve(__dirname, './src/constants'),
  },
};

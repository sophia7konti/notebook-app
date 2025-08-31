/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.js', '.jsx'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testMatch: ['**/src/**/*.test.js'],
  verbose: true
};

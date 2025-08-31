/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.js'],
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/test/**/*.test.js'],
  verbose: true
};








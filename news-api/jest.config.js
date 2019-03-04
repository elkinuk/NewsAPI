module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js', 
    '!src/**/routes.js'
  ],
  coveragePathIgnorePatterns:[
    '/node_modules/',
    '/config/'
  ],
  coverageThreshold: {
    'global': {
      'branches': 80,
      'functions': 80,
      'lines': 80
    }
  }
};
  
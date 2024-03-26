module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~((?:components|utils|hooks|constants|domains|types|images).*)$':
      '<rootDir>/src/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
};

module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^.+\\.svg(\\?react)?$': 'jest-transformer-svg',
  },
  setupFiles: ['./browserStorageMock'],
};

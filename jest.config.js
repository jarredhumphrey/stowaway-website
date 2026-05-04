/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json', diagnostics: false }],
  },
  moduleNameMapper: {
    '^@docusaurus/Link$': '<rootDir>/src/__mocks__/Link.tsx',
    '^@docusaurus/useDocusaurusContext$': '<rootDir>/src/__mocks__/useDocusaurusContext.ts',
    '^@theme/Layout$': '<rootDir>/src/__mocks__/Layout.tsx',
    '^@theme/CodeBlock$': '<rootDir>/src/__mocks__/CodeBlock.tsx',
    '\\.module\\.css$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

module.exports = config;

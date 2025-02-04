// jest.config.js
export default {
    testEnvironment: 'jsdom', // Simulates a browser environment
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Runs setup files before tests
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Maps aliases (if you use them in Vite)
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transforms modern JS/TS
    },
  };
module.exports = {
  preset: '@shelf/jest-mongodb',
  roots: ['<rootDir>'],
  testMatch: [
    '**/tests/**/*.+(spec|test).+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

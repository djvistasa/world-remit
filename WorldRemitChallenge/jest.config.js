module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  transform: {},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/utils/*.js',
    '!src/utils/*.ts',
    '!src/utils/**/*.ts',
    '!src/utils/**/*.tx',
    '!src/utils/jest/*.ts',
    '!src/screens/**/*.tsx',
    '!src/interfaces/**/*.ts',
    '!src/interfaces/**/**/*.ts',
    '!src/components/**/styledComponents/*.ts',
    '!src/screens/index.ts',
    '!src/enums/index.ts',
    '!src/constants/index.ts',
    '!globalStyles.ts',
    '!index.ts',
    '!src/declarations/**/*.d.ts',
    '!src/api/**/*.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  testMatch: ['*/**/**/__tests__/*.test.[jt]s?(x)'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'reports/xml',
        outputName: 'junit.xml',
        uniqueOutputName: 'false',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: '>',
        usePathForSuiteName: 'true',
      },
      'jest',
      {
        coverageThreshold: {
          global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: -10,
          },
        },
      },
    ],
  ],
};

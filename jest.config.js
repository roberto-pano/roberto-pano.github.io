module.exports = {
  preset: 'react-native',
  // Map react-native to react-native-web and stub the example screen helper
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^react-native/Libraries/NewAppScreen$': '<rootDir>/__mocks__/NewAppScreen.js',
  },
  // Allow transforming react-native and related packages which ship modern syntax
  transformIgnorePatterns: ['/node_modules/(?!react-native|@react-native|@react-native-community|@react-navigation|@react-native-async-storage)/'],
};

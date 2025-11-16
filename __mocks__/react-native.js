// Jest manual mock for react-native: delegate to react-native-web but stub useColorScheme
const RNWeb = require('react-native-web');

module.exports = Object.assign({}, RNWeb, {
  // Force a predictable color scheme during tests
  useColorScheme: () => 'light',
});

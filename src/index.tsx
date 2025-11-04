import {AppRegistry} from 'react-native';
import App from '../App';

AppRegistry.registerComponent('RobertoPano', () => App);

AppRegistry.runApplication('RobertoPano', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

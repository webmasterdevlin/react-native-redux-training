/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootNavigation from './app/navigation/root-navigation';

AppRegistry.registerComponent(appName, () => RootNavigation);

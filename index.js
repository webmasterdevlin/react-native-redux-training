/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigationWrapper from './app/navigation/navigation-wrapper';

AppRegistry.registerComponent(appName, () => NavigationWrapper);

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FormLogin from '../auth/screens/FormLogin';

const MainNavigator = createStackNavigator(
  {
    /* register components to convert to screens */
    formLogin: {
      screen: FormLogin,
    },
  },
  {
    initialRouteName: 'formLogin',
  },
);
const RootNavigation = createAppContainer(MainNavigator);
export default RootNavigation;

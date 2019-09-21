import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TodoDetail from '../todos/screens/TodoDetail';
import TodoList from '../todos/screens/TodoList';
import FormLogin from '../auth/screens/FormLogin';
const MainNavigator = createStackNavigator(
  {
    todoList: {
      screen: TodoList,
      navigationOptions: () => ({
        title: 'RN Redux',
      }),
    },
    todoDetail: {
      screen: TodoDetail,
    },
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

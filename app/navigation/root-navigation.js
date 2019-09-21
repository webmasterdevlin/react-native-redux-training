import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TodoDetail from '../todos/screens/TodoDetail';
import TodoList from '../todos/screens/TodoList';
import FormLogin from '../auth/screens/FormLogin';
const MainNavigator = createStackNavigator(
  {
    formLogin: {
      screen: FormLogin,
    },
    todoList: {
      screen: TodoList,
      navigationOptions: () => ({
        title: 'Todo List',
      }),
    },
    todoDetail: {
      screen: TodoDetail,
    },
  },
  {
    initialRouteName: 'formLogin',
  },
);
const RootNavigation = createAppContainer(MainNavigator);
export default RootNavigation;

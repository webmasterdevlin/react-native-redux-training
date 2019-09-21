import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FormLogin from '../auth/screens/FormLogin';
import TodoList from '../todos/screens/TodoList';
import TodoDetail from '../todos/screens/TodoDetail';

const MainNavigator = createStackNavigator(
  {
    /* register components to convert to screens */
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
      navigationOptions: () => ({
        title: 'Todo Details',
      }),
    },
  },
  {
    initialRouteName: 'formLogin',
  },
);
const RootNavigation = createAppContainer(MainNavigator);
export default RootNavigation;

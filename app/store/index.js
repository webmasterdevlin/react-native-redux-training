import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {todoReducer} from '../todos/todo-reducer';

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = []; // side-effect middleware
const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware)),
);

export default store;

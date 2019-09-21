import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {todoReducer} from '../todos/todo-reducer';
import {todoSaga} from '../todos/todo-saga';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; // side-effect middleware
const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(todoSaga);

export default store;

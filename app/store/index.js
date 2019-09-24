import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {todoReducer} from '../todos/todo-reducer';
import {foodReducer} from '../foods/food-reducer';
import {todoSaga} from '../todos/todo-saga';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  foodReducer: foodReducer,
});
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware, logger]; // side-effect middleware
const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(todoSaga);

export default store;

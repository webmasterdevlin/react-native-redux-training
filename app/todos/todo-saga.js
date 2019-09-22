import {put, takeEvery, call} from 'redux-saga/effects';
import {all} from '@redux-saga/core/effects';
import {getTodos, deleteTodo, postTodo, putTodo} from './todo-service';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
} from './todo-actions';

/*function generator implementations of Saga */
function* fetchingTodos() {
  try {
    const {data} = yield call(getTodos); // saga
    yield put({type: FETCH_TODOS_SUCCESS, payload: data});
  } catch (e) {
    console.log(e.message);
    yield put({
      type: FETCH_TODOS_FAIL,
      payload: e.message,
    });
  }
}

function* removingTodo({payload: id}) {
  try {
    yield deleteTodo(id);
    yield put({type: REMOVE_TODO_SUCCESS, payload: id});
  } catch (e) {
    console.log(e.message);
    yield put({
      type: REMOVE_TODO_FAIL,
      payload: e.message,
    });
  }
}

function* addingTodo({payload: newTodo}) {
  try {
    const {data} = yield postTodo(newTodo);
    yield put({type: ADD_TODO_SUCCESS, payload: data});
  } catch (e) {
    console.log(e.message);
    yield put({type: ADD_TODO_FAIL, payload: e.message});
  }
}

function* updatingTodo({payload: updatedTodo}) {
  try {
    yield putTodo(updatedTodo);
    yield put({type: UPDATE_TODO_SUCCESS, payload: updatedTodo});
  } catch (e) {
    yield put({
      type: UPDATE_TODO_FAIL,
      payload: e.message,
    });
  }
}

/* Saga watchers the actions */
function* watchFetchingTodos() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchingTodos);
}

function* watchRemovingTodo() {
  yield takeEvery(REMOVE_TODO_REQUEST, removingTodo);
}

function* watchAddingTodo() {
  yield takeEvery(ADD_TODO_REQUEST, addingTodo);
}
function* watchUpdatingTodo() {
  yield takeEvery(UPDATE_TODO_REQUEST, updatingTodo);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* todoSaga() {
  yield all([
    watchFetchingTodos(),
    watchRemovingTodo(),
    watchAddingTodo(),
    watchUpdatingTodo(),
  ]);
}

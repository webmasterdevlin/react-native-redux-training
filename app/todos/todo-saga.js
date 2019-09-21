import {put, takeEvery, call} from 'redux-saga/effects';
import {all} from '@redux-saga/core/effects';
import {getTodos} from './todo-service';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
} from './todo-actions';

/*function generator implementations of Saga */
function* fetchingTodos() {
  try {
    const {data} = yield call(getTodos); // saga
    yield put({type: FETCH_TODOS_SUCCESS, payload: data});
  } catch (e) {
    console.log(e.message);
    alert(e.message);
    yield put({
      type: FETCH_TODOS_FAIL,
      payload: e.message,
    });
  }
}

/* Saga watchers the actions */
function* watchFetchingTodos() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchingTodos);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* todoSaga() {
  yield all([watchFetchingTodos()]);
}

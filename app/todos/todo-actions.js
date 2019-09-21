/* action types */
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';

/* action creators of Saga */
export const fetchTodos = () => ({
  type: FETCH_TODOS_REQUEST,
});

/* action types */
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';

export const REMOVE_TODO_REQUEST = 'REMOVE_TODO_REQUEST';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAIL = 'REMOVE_TODO_FAIL';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL';

/* action creators of Saga */
export const fetchTodos = () => ({
  type: FETCH_TODOS_REQUEST,
});

export const removeTodo = id => ({
  type: REMOVE_TODO_REQUEST,
  payload: id,
});

export const addTodo = todo => ({
  type: ADD_TODO_REQUEST,
  payload: todo,
});

export const updateTodo = todo => ({
  type: UPDATE_TODO_REQUEST,
  payload: todo,
});

import * as types from './todo-actions';

const initialState = {
  todos: [
    {
      id: '',
      title: '',
    },
  ],
  todo: {
    id: '',
    title: '',
  },
  isLoading: false,
  error: '',
  logo: 'Logo from store',
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return {...state, isLoading: true};
    case types.FETCH_TODOS_SUCCESS:
      return {...state, isLoading: false, todos: action.payload};
    default:
      return state;
  }
};

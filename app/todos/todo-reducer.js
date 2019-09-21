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
    case types.FETCH_TODOS_FAIL:
      return {...state, isLoading: false, error: action.payload};

    case types.REMOVE_TODO_REQUEST:
      return {...state, isLoading: true};
    case types.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: state.todos.filter(t => t.id !== action.payload),
      };
    case types.REMOVE_TODO_FAIL:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};

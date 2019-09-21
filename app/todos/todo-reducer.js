const initialState = {
  todos: [],
  todo: {},
  logo: 'Logo from store',
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'nothing':
      return {...state};

    default:
      return state;
  }
};

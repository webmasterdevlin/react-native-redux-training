import * as types from './food-actions';

const initialState = {
  foods: [{id: '', name: ''}],
  food: {
    id: '',
    name: '',
  },
  isLoading: false,
  error: '',
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FOODS_REQUEST:
      return {...state, isLoading: true};
    case types.FETCH_FOODS_SUCCESS:
      return {...state, isLoading: false, foods: action.payload};
    case types.FETCH_FOODS_FAIL:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

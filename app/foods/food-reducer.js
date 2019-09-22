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

    case types.REMOVE_FOOD_REQUEST:
      return {...state, isLoading: true};
    case types.REMOVE_FOOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        foods: state.foods.filter(f => f.id !== action.payload),
      };
    case types.REMOVE_FOOD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.ADD_FOOD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_FOOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        foods: [...state.foods, action.payload],
      };
    case types.ADD_FOOD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.UPDATE_FOOD_REQUEST:
      return {...state, isLoading: true};
    case types.UPDATE_FOOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        foods: state.foods.map(f =>
          f.id === action.payload.id ? action.payload : food,
        ),
      };
    case types.UPDATE_FOOD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import {getFoods, deleteFood, putFood, postFood} from './food-service';

/* action types */
export const FETCH_FOODS_REQUEST = 'FETCH_FOODS_REQUEST';
export const FETCH_FOODS_SUCCESS = 'FETCH_FOODS_SUCCESS';
export const FETCH_FOODS_FAIL = 'FETCH_FOODS_FAIL';

export const REMOVE_FOOD_REQUEST = 'REMOVE_FOOD_REQUEST';
export const REMOVE_FOOD_SUCCESS = 'REMOVE_FOOD_SUCCESS';
export const REMOVE_FOOD_FAIL = 'REMOVE_FOOD_FAIL';

export const ADD_FOOD_REQUEST = 'ADD_FOOD_REQUEST';
export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS';
export const ADD_FOOD_FAIL = 'ADD_FOOD_FAIL';

export const UPDATE_FOOD_REQUEST = 'UPDATE_FOOD_REQUEST';
export const UPDATE_FOOD_SUCCESS = 'UPDATE_FOOD_SUCCESS';
export const UPDATE_FOOD_FAIL = 'UPDATE_FOOD_FAIL';

/* action creators */

export const fetchFoods = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_FOODS_REQUEST,
    });

    try {
      const {data} = await getFoods();
      console.log('DATA: ', data);
      dispatch({type: FETCH_FOODS_SUCCESS, payload: data});
    } catch (e) {
      console.log(e.message);
      dispatch({type: FETCH_FOODS_FAIL, payload: e.message});
    }
  };
};

export const removeFood = id => {
  return async dispatch => {
    dispatch({
      type: REMOVE_FOOD_REQUEST,
    });
    try {
      await deleteFood(id);
      dispatch({type: REMOVE_FOOD_SUCCESS, payload: id});
    } catch (e) {
      console.log(e.message);
      dispatch({
        type: REMOVE_FOOD_FAIL,
        payload: e.message,
      });
    }
  };
};

export const updateFood = food => {
  return async dispatch => {
    dispatch({
      type: UPDATE_FOOD_REQUEST,
    });

    try {
      await putFood(food);
      dispatch({type: UPDATE_FOOD_SUCCESS, payload: food});
    } catch (e) {
      console.log(e.message);
      dispatch({
        type: UPDATE_FOOD_FAIL,
        payload: e.message,
      });
    }
  };
};

export const addFood = food => {
  return async dispatch => {
    dispatch({
      type: ADD_FOOD_REQUEST,
    });

    try {
      const {data} = await postFood(food);
      dispatch({type: ADD_FOOD_SUCCESS, payload: data});
    } catch (e) {
      console.log(e.message);
      dispatch({
        type: ADD_FOOD_FAIL,
        payload: e.message,
      });
    }
  };
};

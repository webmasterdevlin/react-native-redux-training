import React, {useEffect} from 'react';
import {View, Text, Container, List} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFoods} from '../food-actions';

const FoodList = () => {
  const dispatch = useDispatch();
  const {foods, isLoading} = useSelector(state => state.foodReducer);

  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return (
    <Container>
      <List></List>
    </Container>
  );
};

export default FoodList;

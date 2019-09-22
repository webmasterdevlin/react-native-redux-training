import React, {useEffect} from 'react';
import {View, Text, Container, List, Spinner, ListItem} from 'native-base';
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
      <List>
        {isLoading ? (
          <Spinner color="crimson" />
        ) : (
          foods.map(f => (
            <ListItem key={f.id}>
              <Text>{f.name}</Text>
            </ListItem>
          ))
        )}
      </List>
    </Container>
  );
};

export default FoodList;

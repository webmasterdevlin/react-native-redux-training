import React, {useEffect} from 'react';
import {
  View,
  Content,
  Text,
  Container,
  List,
  Spinner,
  ListItem,
  Icon,
  Button,
} from 'native-base';
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
      <Content style={{margin: 20}} scrollEnable>
        <List>
          {isLoading ? (
            <Spinner color="crimson" />
          ) : (
            foods.map(f => (
              <ListItem
                key={f.id}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>{f.name}</Text>
                <Button danger onPress={() => console.log('ID: ', f.id)}>
                  <Text>Delete</Text>
                </Button>
              </ListItem>
            ))
          )}
        </List>
      </Content>
    </Container>
  );
};

export default FoodList;

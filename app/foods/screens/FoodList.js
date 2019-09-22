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
import {useNavigation} from 'react-navigation-hooks';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFoods, removeFood} from '../food-actions';

const FoodList = () => {
  /* React Navigation */
  const {navigate} = useNavigation();

  /* Redux*/
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
                <View style={{flex: 0, flexDirection: 'row'}}>
                  <Button
                    style={{marginRight: 5}}
                    primary
                    onPress={() => navigate('foodDetail', {id: f.id})}>
                    <Text>Detail</Text>
                  </Button>
                  <Button danger onPress={() => dispatch(removeFood(f.id))}>
                    <Text>Delete</Text>
                  </Button>
                </View>
              </ListItem>
            ))
          )}
        </List>
      </Content>
    </Container>
  );
};

export default FoodList;

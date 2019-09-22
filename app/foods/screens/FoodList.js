import React, {useEffect} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {
  View,
  Content,
  Text,
  Input,
  Label,
  Item,
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
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Item floatingLabel>
          <Label>what's new</Label>
          <Input />
        </Item>
        <Button success full onPress={() => Alert.alert('Saving..', 'ok')}>
          <Text>Save</Text>
        </Button>
      </View>
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
                    onPress={() => navigate('foodDetail', {what: f})}>
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

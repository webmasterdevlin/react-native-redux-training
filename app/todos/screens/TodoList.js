import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTodos, removeTodo} from '../todo-actions';
import {StyleSheet, Alert} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {
  Container,
  Footer,
  Content,
  View,
  Text,
  Button,
  Item,
  Icon,
  SwipeRow,
  Label,
  Input,
  Fab,
  Spinner,
  List,
  ListItem,
} from 'native-base';

export default function TodoList() {
  /* React Navigation */
  const {navigate} = useNavigation();

  /* part of Redux pattern */
  const dispatch = useDispatch();
  const {todos, isLoading} = useSelector(state => state.todoReducer);

  /* React Hooks */
  useEffect(() => {
    dispatch(fetchTodos());
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
            <Spinner color="blue" />
          ) : (
            todos.map(t => (
              <ListItem
                key={t.id}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 24}}>{t.title}</Text>
                <View style={{flex: 0, flexDirection: 'row'}}>
                  <Button
                    style={{marginRight: 5}}
                    primary
                    onPress={() => navigate('todoDetail', {id: t})}>
                    <Text>Detail</Text>
                  </Button>
                  <Button danger onPress={() => dispatch(removeTodo(t.id))}>
                    <Text>Delete</Text>
                  </Button>
                </View>
              </ListItem>
            ))
          )}
        </List>
      </Content>
      <Footer style={styles.footer}>
        <Text style={styles.footerText} note>
          Footer
        </Text>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 20,
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  footer: {
    backgroundColor: '#9C27B0',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 32,
  },
});

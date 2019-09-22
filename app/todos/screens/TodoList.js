import React, {useEffect, useState} from 'react';
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
  const [todo, setTodo] = useState({title: ''});
  const [forEditing, setForEditing] = useState(0);
  const [todoToUpdate, setTodoToUpdate] = useState({});
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleOnChangeInput = input => {
    const newTodo = {...todo};
    newTodo.title = input;

    setTodo(newTodo);
    console.log(newTodo);
    // TODO: dispatch the action here
  };

  const handleEditPress = todo => {
    setForEditing(todo.id);
    setTodoToUpdate(todo);
  };

  const handleEditOnChange = input => {
    const updatedTodo = {...todoToUpdate};
    updatedTodo.title = input;
    setTodoToUpdate(updatedTodo);
  };

  const handleSaveOnPress = () => {
    Alert.alert(todo.title, 'ok');

    // TODO: dispatch action here
  };

  const handleUpdateOnPress = () => {
    Alert.alert(todoToUpdate.title, 'OK');

    // TODO: dispatch action here
  };

  return (
    <Container>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Item floatingLabel>
          <Label>what's new</Label>
          <Input onChangeText={handleOnChangeInput} />
        </Item>
        <Button success full onPress={() => handleSaveOnPress()}>
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
                {forEditing === t.id ? (
                  <Input
                    value={todoToUpdate.title}
                    onChangeText={handleEditOnChange}
                  />
                ) : (
                  <Text style={{fontSize: 24}}>{t.title}</Text>
                )}
                <View style={{flex: 0, flexDirection: 'row'}}>
                  {forEditing === t.id ? (
                    <View style={{flex: 0, flexDirection: 'row'}}>
                      <Button
                        style={{marginRight: 5}}
                        info
                        onPress={() => setForEditing(0)}>
                        <Text>Cancel</Text>
                      </Button>
                      <Button light onPress={() => handleUpdateOnPress()}>
                        <Text>Update</Text>
                      </Button>
                    </View>
                  ) : (
                    <View style={{flex: 0, flexDirection: 'row'}}>
                      <Button
                        style={{marginRight: 5}}
                        warning
                        onPress={() => handleEditPress(t)}>
                        <Text>Edit</Text>
                      </Button>
                      <Button
                        style={{marginRight: 5}}
                        primary
                        onPress={() => navigate('todoDetail', {id: t})}>
                        <Text>Detail</Text>
                      </Button>
                      <Button danger onPress={() => dispatch(removeTodo(t.id))}>
                        <Text>X</Text>
                      </Button>
                    </View>
                  )}
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

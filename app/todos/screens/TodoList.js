import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTodos, removeTodo} from '../todo-actions';
import {StyleSheet, Alert, RefreshControl} from 'react-native';
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
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [todo, setTodo] = useState({title: ''}); // The new todo that will be sent to the web API
  const [forEditing, setForEditing] = useState(0); // For tracking which todo should be edited
  const [todoToUpdate, setTodoToUpdate] = useState({}); // the todo you've picked to edit

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleInputOnChange = input => {
    // To edit input
    const newTodo = {...todo};
    newTodo.title = input;
    setTodo(newTodo);
  };

  const handleEditOnChange = input => {
    // To edit input
    const updatedTodo = {...todoToUpdate};
    updatedTodo.title = input;
    setTodoToUpdate(updatedTodo);
  };

  const handleEditOnPress = todo => {
    // For setup. No form submission here.
    setForEditing(todo.id);
    setTodoToUpdate(todo);
  };

  const handleSaveOnPress = () => {
    // Form submission
    Alert.alert(todo.title, 'ok');

    // TODO: dispatch action here
  };

  const handleUpdateOnPress = () => {
    // Form submission
    Alert.alert(todoToUpdate.title, 'OK');

    // TODO: dispatch action here
  };

  return (
    <Container style={{backgroundColor: '#EAF2F5'}}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Item floatingLabel>
          <Label>what's new</Label>
          <Input onChangeText={handleInputOnChange} />
        </Item>
        <Button success full onPress={() => handleSaveOnPress()}>
          <Text>Save</Text>
        </Button>
      </View>
      <Content
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              try {
                dispatch(fetchTodos());
              } catch (e) {
              } finally {
                setIsRefreshing(false);
              }
            }}
            title="Loading..."
          />
        }
        style={{margin: 20}}
        scrollEnable>
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
                        onPress={() => handleEditOnPress(t)}>
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

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTodos, removeTodo} from '../todo-actions';
import {StyleSheet, Alert} from 'react-native';
import {
  Container,
  Footer,
  Content,
  View,
  Text,
  Button,
  Icon,
  SwipeRow,
  Fab,
  Spinner,
  List,
  ListItem,
} from 'native-base';

export default function TodoList() {
  /* part of Redux pattern */
  const dispatch = useDispatch();
  const {todos, isLoading} = useSelector(state => state.todoReducer);

  /* React Hooks */
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    dispatch(await fetchTodos());
  };

  return (
    <Container>
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
                <Button danger onPress={() => dispatch(removeTodo(t.id))}>
                  <Text>Delete</Text>
                </Button>
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

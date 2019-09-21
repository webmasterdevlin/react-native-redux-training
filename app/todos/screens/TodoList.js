import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTodos} from '../todo-actions';
import {StyleSheet, Alert} from 'react-native';
import {
  Container,
  Content,
  View,
  Button,
  Icon,
  Spinner,
  SwipeRow,
  Fab,
  Body,
  Footer,
  Text,
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
      <Content scrollEnable>
        {isLoading ? (
          <Spinner color="blue" />
        ) : (
          todos.map(t => (
            <View key={t.id}>
              <Text>{t.title}</Text>
            </View>
          ))
        )}
      </Content>
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

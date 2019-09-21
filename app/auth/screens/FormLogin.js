import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
  View,
} from 'native-base';

export default function FormLogin() {
  const {logo} = useSelector(state => {
    console.log('STATE: ', state);
    return state.todoReducer;
  });
  return (
    <Container style={{margin: 20}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>
        </View>
        <View>
          <Text style={{textAlign: 'center'}}>{logo}</Text>
        </View>
        <View>
          <Button
            full
            primary
            onPress={() => {
              const test = 23;
              console.log('Here!', test);
              debugger;
            }}>
            <Text>Sign in</Text>
          </Button>
          <View style={{marginTop: 5, marginBottom: 5}} />
          <Button full secondary>
            <Text>Register</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}

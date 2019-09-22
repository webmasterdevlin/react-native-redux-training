import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

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
  const {navigate} = useNavigation();
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
          <Text style={{textAlign: 'center'}}>Nothing</Text>
        </View>
        <View>
          <Button
            full
            primary
            onPress={() => {
              navigate('todoList');
            }}>
            <Text>Sign in</Text>
          </Button>
          <View style={{marginTop: 5, marginBottom: 5}} />
          <Button
            full
            secondary
            onPress={() => {
              navigate('foodList');
            }}>
            <Text>Register</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}

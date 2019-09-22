import React from 'react';
import {useNavigation} from 'react-navigation-hooks';

import {
  Container,
  Button,
  Text,
  Item as FormItem,
  Input,
  Label,
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
          <Text style={{textAlign: 'center'}}>LOGO</Text>
        </View>

        <View>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel style={{marginBottom: 50}}>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>
          <Button
            full
            primary
            onPress={() => {
              navigate('todoList');
            }}>
            <Text>Todos</Text>
          </Button>
          <View style={{marginTop: 5, marginBottom: 5}} />
          <Button
            full
            secondary
            onPress={() => {
              navigate('foodList');
            }}>
            <Text>Foods</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}

import React from 'react';

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
          <Text style={{textAlign: 'center'}}>Logo Name</Text>
        </View>
        <View>
          <Button full primary>
            <Text>Sign in</Text>
          </Button>
          <Button full secondary>
            <Text>Register</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}

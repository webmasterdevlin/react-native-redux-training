import React from 'react';
import {Text} from 'react-native';

export default function TodoDetail(props) {
  return <Text>TodoDetail Works! {props.navigation.getParam('id')}</Text>;
}

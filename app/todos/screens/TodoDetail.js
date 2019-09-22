import React from 'react';
import {Text} from 'react-native';

export default function TodoDetail(props) {
  return (
    <Text style={{fontSize: 30}}>{props.navigation.getParam('id').title}</Text>
  );
}

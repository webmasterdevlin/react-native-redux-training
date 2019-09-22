import React from 'react';
import {View, Text} from 'native-base';

const FoodDetail = props => (
  <Text>Food Detail Works! {props.navigation.getParam('id')}</Text>
);

export default FoodDetail;

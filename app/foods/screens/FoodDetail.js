import React from 'react';
import {View, Text} from 'native-base';

const FoodDetail = props => (
  <Text style={{fontSize: 40}}>{props.navigation.getParam('what').name}</Text>
);

export default FoodDetail;

import {View, Text} from 'react-native';
import React from 'react';

interface AleatoryProps {
  min: number;
  max: number;
}

export default function Aleatory({min, max}: AleatoryProps) {

  const numberAleatory = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


  return (
    <View>
      <Text>The aleatory number between {min} and {max} is {numberAleatory(min,max)}</Text>
    </View>
  )
}
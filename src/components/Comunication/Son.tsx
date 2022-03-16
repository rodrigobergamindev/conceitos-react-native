import { View, Text, Button } from 'react-native'
import React from 'react'

interface SonProps{
    min: number;
    max: number;
    showNumber: (n: number) => void
}

export default function Son({min, max, showNumber}: SonProps) {

    const numberAleatory = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);


  return (
 
    <Button onPress={() => {
      const number = numberAleatory(min,max)
      showNumber(number)
    }} title="Executar"/>
  
  )
}
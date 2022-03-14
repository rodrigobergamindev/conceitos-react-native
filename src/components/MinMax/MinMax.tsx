import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'

interface MinMaxProps {
    x: number;
    y: number;
}
const MinMax = ({x,y}: MinMaxProps) => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    useEffect(() => {
        if(x > y && x !== y) {
            setMax(x)
            setMin(y)
        }
    
        if(x < y && x !== y){
            setMax(y)
            setMin(x)
        }
    },[min, max])


  return (
    <SafeAreaView>
      <Text>MinMax component</Text>
      <Text>{`Value Max = ${max} | Value Min = ${min}`}</Text>
    </SafeAreaView>
  )
}



export default MinMax
import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Son from './Son'

export default function Father() {

    const [num, setNum] = useState(0)

    function showNumber(number: number){
        setNum(number)
    }

  return (
    <View>
        <Text>The aleatory number is {num}</Text>
      <Son min={2} max={90} showNumber={showNumber}/>
    </View>
  )
}
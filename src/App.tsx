

import { View, SafeAreaView, Text } from 'react-native'
import style from './components/First/style/style'
import React from 'react'
import First from './components/First/First'
import MinMax from './components/MinMax/MinMax'

const App = () => {
  return (
    <View style={style.App}>
        {/*<First/>*/}
        <MinMax x={3} y={9}/>
    </View>
  )
}




export default App
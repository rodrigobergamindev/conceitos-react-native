import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const First = () => {
  return (
    <SafeAreaView>
      <Text>First component</Text>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    App: {
        backgroundColor: '#3498db',
        color: '#FFFFF',
        flexGrow: 1
    }
})

export default First
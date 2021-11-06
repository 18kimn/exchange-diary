import {StatusBar} from 'expo-status-bar'
import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'

export default function App() {
  const [input, setInput] = useState('test')
  return (
    <View style={styles.container}>
      <Text>hi asdfasfasfdasdasd</Text>
      <Text> this is a jijijijijijij line </Text>
      <TextInput multiline={true} numberOfLines={20} value={input}
      onChange = {(text) => setInput(text)}/>

      <View style={styles.header}></View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    width: 50,
    backgroundColor: 'pink'
  }
})

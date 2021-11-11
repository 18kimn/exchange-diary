import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {TextInput} from 'react-native-paper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '14pt',
  },
  content: {
    fontSize: '12pt',
  },
})

const WriteScreen = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="how are you feeling today?"
        multiline={true}
        numberOfLines={20}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
    </View>
  )
}

export default WriteScreen

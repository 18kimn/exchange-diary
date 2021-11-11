import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {StyledTextInput as TextInput} from '../components/Inputs'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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

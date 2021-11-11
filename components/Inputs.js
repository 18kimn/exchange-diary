import React from 'react'
import {Text, TextInput} from 'react-native-paper'

const StyledText = (props) => {
  return <Text {...props} style={{backgroundColor: 'none', margin: '10px'}} />
}

const StyledTextInput = (props) => {
  return (
    <TextInput {...props} style={{backgroundColor: 'none', margin: '10px'}} />
  )
}

export {StyledText, StyledTextInput}

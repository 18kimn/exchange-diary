import React from 'react'
import {View, Text} from 'react-native'
import entries from '../entries.json'
const ReadScreen = () => {
  console.log(entries)
  return (
    <View>
      {entries.map((entry, i) => (
        <View key={i}>
          <Text>{entry.date}</Text>
          <Text>{entry.content}</Text>
        </View>
      ))}
    </View>
  )
}

export default ReadScreen

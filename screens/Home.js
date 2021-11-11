import React from 'react'
import {View} from 'react-native'
import {Button} from 'react-native-paper'
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Read')}>
        read something
      </Button>
      <Button onPress={() => navigation.navigate('Write')}>
        write something
      </Button>
    </View>
  )
}

export default HomeScreen

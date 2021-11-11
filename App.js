import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Provider as PaperProvider} from 'react-native-paper'
import Theme from './styles/Theme'
import HomeScreen from './screens/Home'
import WriteScreen from './screens/Write'
import ReadScreen from './screens/Read'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Write" component={WriteScreen}></Stack.Screen>
          <Stack.Screen name="Read" component={ReadScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Provider as PaperProvider} from 'react-native-paper'
import Theme from './components/Theme'
import HomeScreen from './screens/Home'
import WriteScreen from './screens/Write'
import ReadScreen from './screens/Read'

import transitionConfig from './components/transitions'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {height: 'fit-content'},
            headerTitleStyle: {marginTop: '10px', marginBottom: '10px'},
            ...transitionConfig,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={transitionConfig}
          ></Stack.Screen>
          <Stack.Screen
            name="Write"
            component={WriteScreen}
            options={transitionConfig}
          ></Stack.Screen>
          <Stack.Screen
            name="Read"
            component={ReadScreen}
            options={transitionConfig}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

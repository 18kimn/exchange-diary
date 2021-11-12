import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import Theme from "./components/Theme";
import HomeScreen from "./screens/Home";
import WriteScreen from "./screens/Write";
import ReadScreen from "./screens/Read";

import EmojiScreen from "./screens/Emoji";
import IntroScreen from "./screens/Intro";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "fade",
          }}
        >
          <Stack.Screen name="Hello" component={IntroScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Emoji Selection" component={EmojiScreen} />
          <Stack.Screen name="Write" component={WriteScreen} />
          <Stack.Screen name="Read" component={ReadScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

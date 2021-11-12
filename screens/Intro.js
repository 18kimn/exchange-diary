import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const IntroScreen = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    titleContainer: {
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 15,
      paddingBottom: 15,
    },
    titleText: {
      fontSize: 24,
    },
  });
  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => {
          setIsPressed(false);
          navigation.navigate("Home");
        }}
      >
        <LinearGradient
          style={styles.titleContainer}
          colors={[
            isPressed ? "rgba(250,0,90,0)" : "white",
            isPressed ? "rgba(248, 142, 185, 0.6)" : "white",
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 0, y: 1 }}
        >
          <Text style={styles.titleText}>Exchange Diary</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default IntroScreen;

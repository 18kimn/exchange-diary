import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export const emojis = {
  sad: "🙁",
  happy: "☺️",
  grumpy: "😤",
  happytear: "🥲",
  tired: "🥱",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
  emojiContainer: {
    padding: 15,
    margin: 5,
    borderRadius: 5,
    borderWidth: 0.5,
  },
});

const EmojiBlock = ({ navigation, emojiName }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false);
        navigation.navigate("Write", { emojiName: emojiName });
      }}
    >
      <LinearGradient
        style={styles.emojiContainer}
        colors={[
          isPressed ? "rgba(250,0,90,0)" : "white",
          isPressed ? "rgba(248, 142, 185, 0.6)" : "white",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={styles.text}>{emojis[emojiName]}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const EmojiScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {Object.keys(emojis).map((emojiName, i) => (
        <EmojiBlock emojiName={emojiName} key={i} navigation={navigation} />
      ))}
    </View>
  );
};

export default EmojiScreen;

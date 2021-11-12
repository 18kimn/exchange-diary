import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Gradient from "../components/Gradient";
import { emojis } from "./Emoji";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
  },
  title: {
    fontSize: 20,
    height: 40,
    backgroundColor: "transparent",
    marginTop: "auto",
  },
  content: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 12,
    alignSelf: "stretch",
    borderWidth: 0.2,
    padding: 10,
    borderRadius: 5,
  },
});

export const getToday = () => {
  const date = new Date();
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();

  return `${year}.${month}.${day} ${weekday}`;
};

const WriteScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState(getToday());
  const [content, setContent] = useState("");
  const emojiName = route.params.emojiName;
  return (
    <Gradient percent={0.7}>
      <View style={styles.container}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TextInput
            style={styles.title}
            placeholder="title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <View
            style={{
              marginLeft: "auto",
              padding: 10,
              borderWidth: 0.2,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 24 }}>{emojis[emojiName]}</Text>
          </View>
        </View>

        <View style={{ flex: 1, alignSelf: "stretch", marginTop: 10 }}>
          <TextInput
            style={styles.content}
            placeholder="how are you feeling today?"
            multiline={true}
            numberOfLines={20}
            value={content}
            onChangeText={(text) => setContent(text)}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View
              style={{
                borderWidth: 0.2,
                padding: 10,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>Exchange</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Gradient>
  );
};

export default WriteScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Gradient from "../components/Gradient";
import baseEntries from "../entries.json";
import hplipsum from "hplipsum";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  entry: {
    borderTopWidth: 0.2,
    marginTop: 20,
    paddingTop: 5,
  },
  content: {
    marginTop: 5,
  },
});

const Entry = ({ entry, i }) => {
  const [shouldShow, setShouldShow] = useState(false);

  const date = new Date(entry.date);
  return (
    <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
      <View style={styles.entry} key={i}>
        <Text>{date.toLocaleDateString()}</Text>
        {shouldShow && <Text style={styles.content}>{entry.content}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const ReadScreen = ({ navigation }) => {
  const [entries, setEntries] = useState(baseEntries);

  const addDummyPost = () => {
    const startDate = new Date("2021-01-01").getTime();
    const today = new Date().getTime();
    const date = new Date(startDate + Math.random() * (today - startDate));

    setEntries((prev) => [
      ...prev,
      { date: date.toLocaleDateString(), content: hplipsum() },
    ]);
  };
  return (
    <Gradient percent={1 - entries.length / 20}>
      <ScrollView style={styles.container}>
        {entries.map((entry, i) => (
          <Entry entry={entry} key={i} />
        ))}
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: 20,
          marginBottom: 50,
        }}
      >
        <Pressable onPress={addDummyPost}>
          <View
            style={{
              borderWidth: 0.2,
              padding: 5,
              borderRadius: 5,
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            <Text style={{ fontSize: 12 }}> demo tool: add dummy posts</Text>
          </View>
        </Pressable>
        <View style={{ flex: 1 }}></View>
        <Pressable onPress={() => navigation.navigate("Emoji Selection")}>
          <View
            style={{
              borderWidth: 0.2,
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Write</Text>
          </View>
        </Pressable>
      </View>
    </Gradient>
  );
};

export default ReadScreen;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Gradient from "../components/Gradient";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 0.7,
    borderRadius: 5,
    width: 75,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <Gradient>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Read")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>read</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Emoji Selection")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>write</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Gradient>
  );
};

export default HomeScreen;

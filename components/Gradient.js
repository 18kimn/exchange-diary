import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
});

const Gradient = ({ percent, style, children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        style={style || styles.background}
        colors={["rgba(250,0,90,0)", "rgba(248, 142, 185, 0.6)"]}
        start={{ x: 0, y: percent || 0 }}
        end={{ x: 0, y: 1 }}
      >
        {children}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Gradient;

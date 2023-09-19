import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const NihaiInV34 = () => {
  return (
    <ImageBackground
      style={styles.nihaiInV34}
      resizeMode="cover"
      source={require("../assets/nihaiinv34.png")}
    />
  );
};

const styles = StyleSheet.create({
  nihaiInV34: {
    width: 612,
    height: 360,
  },
});

export default NihaiInV34;

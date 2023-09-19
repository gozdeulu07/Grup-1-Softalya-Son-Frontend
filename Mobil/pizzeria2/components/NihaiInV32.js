import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const NihaiInV32 = () => {
  return (
    <ImageBackground
      style={styles.nihaiInV32}
      resizeMode="cover"
      source={require("../assets/nihaiinv34.png")}
    />
  );
};

const styles = StyleSheet.create({
  nihaiInV32: {
    width: 612,
    height: 360,
  },
});

export default NihaiInV32;

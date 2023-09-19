import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const NihaiInV31 = () => {
  return (
    <ImageBackground
      style={styles.nihaiInV31}
      resizeMode="cover"
      source={require("../assets/nihaiinv34.png")}
    />
  );
};

const styles = StyleSheet.create({
  nihaiInV31: {
    width: 612,
    height: 360,
  },
});

export default NihaiInV31;

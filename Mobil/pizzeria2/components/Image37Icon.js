import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image37Icon = () => {
  return (
    <ImageBackground
      style={styles.image37Icon}
      resizeMode="cover"
      source={require("../assets/image37.png")}
    />
  );
};

const styles = StyleSheet.create({
  image37Icon: {
    width: 228,
    height: 129,
  },
});

export default Image37Icon;

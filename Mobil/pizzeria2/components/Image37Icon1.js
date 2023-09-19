import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image37Icon1 = () => {
  return (
    <ImageBackground
      style={styles.image37Icon}
      resizeMode="cover"
      source={require("../assets/image371.png")}
    />
  );
};

const styles = StyleSheet.create({
  image37Icon: {
    width: 120,
    height: 129,
  },
});

export default Image37Icon1;

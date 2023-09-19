import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const RectangleScreen = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.brown_100,
    width: 150,
    height: 47,
  },
});

export default RectangleScreen;

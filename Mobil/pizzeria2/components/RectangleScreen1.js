import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const RectangleScreen1 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.peru,
    width: 211,
    height: 465,
  },
});

export default RectangleScreen1;

import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const UrunInceleme = ({ onClose }) => {
  return (
    <View style={[styles.rnInceleme, styles.rnIncelemeLayout]}>
      <View style={styles.rnIncelemeChild} />
      <View style={[styles.rnStandrnInceleme, styles.incelemeShadowBox]}>
        <Image
          style={[styles.rnStandIcon, styles.rnIncelemeLayout]}
          contentFit="cover"
          source={require("../assets/rn-stand2.png")}
        />
        <Text style={[styles.tl, styles.tlTypo]}>120TL</Text>
        <Image
          style={styles.image10Icon}
          contentFit="cover"
          source={require("../assets/image-101.png")}
        />
        <Text style={[styles.klasikPizza, styles.tlTypo]}>KLASIK PIZZA</Text>
        <Text style={[styles.mantarKaarPeyniri, styles.toplam2218Layout]}>
          Mantar, kaşar peyniri, domates, sucuk, salam ve sosis
        </Text>
      </View>
      <View style={[styles.rnIncelemeItem, styles.incelemeBorder]} />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.text1, styles.textTypo]}>-</Text>
      <Text style={styles.text2}>5</Text>
      <Text style={[styles.toplam2218, styles.toplam2218Typo]}>
        Toplam: 22,18$
      </Text>
      <View style={[styles.rnIncelemeInner, styles.incelemeBorder]} />
      <Text style={[styles.sepeteEkle, styles.toplam2218Typo]}>{`SEPETE
EKLE`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rnIncelemeLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  incelemeShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  tlTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  toplam2218Layout: {
    height: 49,
    textAlign: "left",
  },
  incelemeBorder: {
    backgroundColor: Color.peru,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  textTypo: {
    height: 60,
    width: 27,
    color: Color.brown_100,
    fontSize: FontSize.size_21xl,
    top: 202,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  toplam2218Typo: {
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    display: "flex",
    color: Color.brown_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  rnIncelemeChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.peachpuff,
    borderWidth: 5,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
    height: 412,
    width: 393,
  },
  rnStandIcon: {
    height: "101.15%",
    width: "100.05%",
    top: "0.21%",
    right: "0.08%",
    bottom: "-1.36%",
    left: "-0.13%",
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  tl: {
    top: 93,
    left: 274,
    color: Color.black,
    width: 54,
    height: 30,
  },
  image10Icon: {
    top: 19,
    left: 15,
    borderRadius: Border.br_86xl,
    width: 102,
    height: 96,
    position: "absolute",
  },
  klasikPizza: {
    top: 17,
    left: 142,
    color: Color.gray_100,
  },
  mantarKaarPeyniri: {
    top: 47,
    left: 126,
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    width: 163,
    color: Color.white,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    height: 49,
    position: "absolute",
  },
  rnStandrnInceleme: {
    top: 33,
    left: 10,
    width: 373,
    height: 135,
    position: "absolute",
  },
  rnIncelemeItem: {
    top: 209,
    left: 77,
    borderWidth: 1,
    width: 47,
    height: 44,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text: {
    left: 134,
  },
  text1: {
    left: 45,
  },
  text2: {
    top: 219,
    left: 90,
    fontSize: FontSize.size_13xl,
    width: 33,
    height: 25,
    alignItems: "center",
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  toplam2218: {
    top: 291,
    left: 46,
    width: 205,
    height: 49,
    textAlign: "left",
  },
  rnIncelemeInner: {
    top: 259,
    left: 263,
    borderWidth: 3,
    width: 98,
    height: 115,
  },
  sepeteEkle: {
    top: 273,
    left: 267,
    textAlign: "center",
    justifyContent: "center",
    width: 91,
    height: 88,
  },
  rnInceleme: {
    backgroundColor: Color.gray_200,
    transform: [
      {
        rotate: "0.33deg",
      },
    ],
    height: 412,
    width: 393,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default UrunInceleme;

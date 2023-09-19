import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menuParent, styles.menuLayout]}>
      <View style={[styles.menu, styles.menuLayout]}>
        <View style={[styles.menu1, styles.menuPosition]} />
        <Pressable
          style={[styles.menuChild, styles.menuPosition]}
          onPress={() => navigation.navigate("Profilim")}
        />
        <View
          style={[styles.hesabmmenubutton, styles.hesabmmenubuttonPosition]}
        />
        <Pressable
          style={[styles.adreslerm, styles.adreslermPosition]}
          onPress={() => navigation.navigate("Adreslerim")}
        >
          <Text style={[styles.adreslerm1, styles.proflmFlexBox]}>
            ADRESLERİM
          </Text>
        </Pressable>
        <View
          style={[styles.hesabmmenubutton1, styles.hesabmmenubuttonPosition]}
        />
        <Pressable
          style={styles.sparlerm}
          onPress={() => navigation.navigate("Siparislerim")}
        >
          <Text style={[styles.adreslerm1, styles.proflmFlexBox]}>
            SİPARİŞLERİM
          </Text>
        </Pressable>
        <Pressable
          style={[styles.hesabmmenubutton2, styles.proflmPosition]}
          onPress={() => navigation.navigate("Profilim")}
        />
        <Text style={[styles.proflm, styles.proflmPosition]}>PROFİLİM</Text>
        <Pressable
          style={[styles.hesabmmenubutton3, styles.anaSayfaPosition]}
          onPress={() => navigation.navigate("Anamenu")}
        />
        <Text style={[styles.anaSayfa, styles.anaSayfaPosition]}>
          ANA SAYFA
        </Text>
        <Image
          style={styles.menuItem}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={styles.smSoysm}>İSİM SOYİSİM</Text>
        <Image
          style={styles.image50Icon}
          contentFit="cover"
          source={require("../assets/image-50.png")}
        />
        <Image
          style={styles.image51Icon}
          contentFit="cover"
          source={require("../assets/image-51.png")}
        />
        <Image
          style={[styles.image52Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-52.png")}
        />
        <Image
          style={[styles.image53Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-53.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    width: 393,
    height: 787,
  },
  menuPosition: {
    top: 1,
    position: "absolute",
  },
  hesabmmenubuttonPosition: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    left: 30,
    right: 143,
  },
  adreslermPosition: {
    top: 330,
    position: "absolute",
  },
  proflmFlexBox: {
    width: 181,
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  proflmPosition: {
    top: 210,
    height: 40,
    position: "absolute",
  },
  anaSayfaPosition: {
    top: 150,
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    width: 36,
    position: "absolute",
  },
  menu1: {
    left: -1,
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    backgroundColor: Color.brown_200,
    borderStyle: "solid",
    borderColor: "#f0b570",
    borderTopWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    width: 320,
    height: 787,
  },
  menuChild: {
    left: 320,
    backgroundColor: Color.gainsboro_200,
    width: 73,
    height: 786,
  },
  hesabmmenubutton: {
    height: 40,
    top: 330,
    position: "absolute",
  },
  adreslerm1: {
    height: 40,
  },
  adreslerm: {
    left: 63,
  },
  hesabmmenubutton1: {
    top: 270,
    height: 40,
    position: "absolute",
  },
  sparlerm: {
    left: 69,
    top: 271,
    position: "absolute",
  },
  hesabmmenubutton2: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    left: 30,
    right: 143,
  },
  proflm: {
    left: 47,
    width: 181,
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  hesabmmenubutton3: {
    backgroundColor: "#fffcfc",
    borderRadius: Border.br_xl,
    right: 143,
    top: 150,
    left: 30,
  },
  anaSayfa: {
    left: 49,
    width: 181,
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  menuItem: {
    top: 22,
    width: 107,
    height: 107,
    left: 30,
    position: "absolute",
  },
  smSoysm: {
    top: 48,
    left: 140,
    color: Color.white,
    width: 146,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  image50Icon: {
    top: 156,
    left: 38,
    width: 45,
    height: 27,
    position: "absolute",
  },
  image51Icon: {
    top: 214,
    width: 31,
    height: 31,
    left: 45,
    position: "absolute",
  },
  image52Icon: {
    top: 273,
    height: 35,
    left: 45,
  },
  image53Icon: {
    top: 334,
    height: 33,
    left: 47,
  },
  menu: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 787,
  },
  menuParent: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 787,
  },
});

export default FrameComponent;

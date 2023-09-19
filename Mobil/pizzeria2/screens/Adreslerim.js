import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Adreslerim = () => {
  const navigation = useNavigation();
  const [menu1IconVisible, setMenu1IconVisible] = useState(false);

  const openMenu1Icon = useCallback(() => {
    setMenu1IconVisible(true);
  }, []);

  const closeMenu1Icon = useCallback(() => {
    setMenu1IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.adreslerm}>
        <View style={[styles.arkaPlan, styles.arkaPlanLayout]}>
          <View style={styles.property1default}>
            <View
              style={[styles.property1defaultChild, styles.menubar1Position]}
            />
            <Image
              style={[styles.nihaiInV33, styles.nihaiLayout]}
              contentFit="cover"
              source={require("../assets/nihai-in-v3-3.png")}
            />
            <Image
              style={[styles.nihaiInV34, styles.nihaiLayout]}
              contentFit="cover"
              source={require("../assets/nihai-in-v3-3.png")}
            />
            <Image
              style={[styles.nihaiInV35, styles.nihaiLayout]}
              contentFit="cover"
              source={require("../assets/nihai-in-v3-3.png")}
            />
            <Image
              style={[styles.property1defaultItem, styles.adreslermChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-13.png")}
            />
            <Pressable
              style={[styles.adresEkleButton, styles.adresEkleButtonLayout]}
              onPress={() => navigation.navigate("AdresEkleme")}
            />
            <Text style={[styles.adresEkle, styles.balk1Typo]}>Adres ekle</Text>
          </View>
        </View>
        <View style={styles.menubar}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={[styles.profilim, styles.menu1Position]}>Adresim</Text>
          <Pressable
            style={styles.sepetv21}
            onPress={() => navigation.navigate("Sepetim")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/sepetv2-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.menu1, styles.menu1Position]}
            onPress={openMenu1Icon}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/menu-1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.adresBlou, styles.arkaPlanLayout]}>
          <View
            style={[styles.property1default1, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-51.png")}
            />
            <Text style={[styles.balk1, styles.balk1Position]}>Başlık 1</Text>
            <Image
              style={[styles.ellipseIcon, styles.balk1Position]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.adresTanm1, styles.adresClr]}>{`Adres tanımı 1
sadfasf
sadfsaf`}</Text>
          </View>
          <View
            style={[styles.property1variant2, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-51.png")}
            />
            <Text style={[styles.balk1, styles.balk1Position]}>Başlık 1</Text>
            <Image
              style={[styles.ellipseIcon, styles.balk1Position]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.adresTanm1, styles.adresClr]}>{`Adres tanımı 1
sadfasf
sadfsaf`}</Text>
          </View>
          <View
            style={[styles.property1variant3, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-51.png")}
            />
            <Text style={[styles.balk1, styles.balk1Position]}>Başlık 1</Text>
            <Image
              style={[styles.ellipseIcon, styles.balk1Position]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.adresTanm1, styles.adresClr]}>{`Adres tanımı 1
sadfasf
sadfsaf`}</Text>
          </View>
        </View>
        <View style={[styles.adreslermChild, styles.adreslermChildLayout]} />
      </View>

      <Modal animationType="fade" transparent visible={menu1IconVisible}>
        <View style={styles.menu1IconOverlay}>
          <Pressable style={styles.menu1IconBg} onPress={closeMenu1Icon} />
          <FrameComponent onClose={closeMenu1Icon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  arkaPlanLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  menubar1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  nihaiLayout: {
    height: 231,
    left: 0,
    width: 393,
    position: "absolute",
  },
  adreslermChildLayout: {
    height: 60,
    left: 0,
    width: 393,
    position: "absolute",
  },
  adresEkleButtonLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  balk1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  menu1Position: {
    top: 24,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  property1variantLayout: {
    height: 144,
    width: 333,
    left: 20,
    position: "absolute",
  },
  balk1Position: {
    top: 10,
    position: "absolute",
  },
  adresClr: {
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  property1defaultChild: {
    backgroundColor: Color.gainsboro_100,
  },
  nihaiInV33: {
    top: 0,
    height: 231,
  },
  nihaiInV34: {
    top: 231,
  },
  nihaiInV35: {
    top: 462,
  },
  property1defaultItem: {
    top: 623,
  },
  adresEkleButton: {
    top: 557,
    backgroundColor: Color.peru,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 303,
    height: 40,
    left: 45,
  },
  adresEkle: {
    top: 565,
    left: 146,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  property1default: {
    top: 20,
    height: 683,
    width: 393,
    left: 20,
    position: "absolute",
  },
  arkaPlan: {
    top: 83,
    left: -20,
    width: 433,
    height: 723,
  },
  menubar1: {
    backgroundColor: Color.brown_100,
  },
  profilim: {
    left: 81,
    fontSize: FontSize.size_17xl,
    color: Color.white,
    width: 238,
    height: 50,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  icon: {
    height: "100%",
  },
  sepetv21: {
    left: 319,
    top: 22,
    right: 19,
    height: 36,
    position: "absolute",
  },
  menu1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menu1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  menu1: {
    left: 26,
    width: 34,
    height: 34,
  },
  menubar: {
    height: 103,
    left: 0,
    top: 0,
    width: 393,
    position: "absolute",
  },
  property1defaultInner: {
    height: "104.17%",
    width: "101.8%",
    top: "-2.08%",
    right: "-0.9%",
    bottom: "-2.08%",
    left: "-0.9%",
    maxHeight: "100%",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  balk1: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    fontSize: FontSize.size_xl,
    left: 45,
  },
  ellipseIcon: {
    left: 15,
    width: 24,
    height: 24,
  },
  adresTanm1: {
    bottom: 31,
    left: 27,
    textAlign: "left",
    width: 283,
    height: 68,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  property1default1: {
    top: 19,
  },
  property1variant2: {
    top: 187,
  },
  property1variant3: {
    top: 355,
  },
  adresBlou: {
    top: 109,
    left: 10,
    width: 373,
    height: 519,
  },
  adreslermChild: {
    top: 724,
    display: "none",
    backgroundColor: Color.brown_100,
  },
  adreslerm: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default Adreslerim;

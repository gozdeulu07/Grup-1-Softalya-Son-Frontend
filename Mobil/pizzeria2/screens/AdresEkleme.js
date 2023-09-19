import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AdresEkleme = () => {
  const [menu1IconVisible, setMenu1IconVisible] = useState(false);
  const navigation = useNavigation();

  const openMenu1Icon = useCallback(() => {
    setMenu1IconVisible(true);
  }, []);

  const closeMenu1Icon = useCallback(() => {
    setMenu1IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.adresEkleme}>
        <View style={styles.menubar}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={styles.profilim}>Adresi değiştir</Text>
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
          <Pressable style={styles.menu1} onPress={openMenu1Icon}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/menu-1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.arkaPlan, styles.arkaPlanLayout]}>
          <View
            style={[styles.property1default, styles.property1defaultPosition]}
          >
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
              style={[styles.property1defaultItem, styles.altBarLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-13.png")}
            />
            <Pressable
              style={[styles.adresEkleButton, styles.adresEkleButtonLayout]}
              onPress={() => navigation.navigate("Adreslerim")}
            />
          </View>
        </View>
        <View style={[styles.adresBlou, styles.arkaPlanLayout]}>
          <View
            style={[styles.property1default1, styles.property1defaultPosition]}
          >
            <Image
              style={[
                styles.property1defaultInner,
                styles.adresEkleButtonLayout,
              ]}
              contentFit="cover"
              source={require("../assets/rectangle-51.png")}
            />
            <Text style={[styles.balk1, styles.ekleTypo]}>Başlık 1</Text>
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.adresTanm1, styles.ekleTypo]}>{`Adres tanımı 1
sadfasf
sadfsaf`}</Text>
          </View>
        </View>
        <View style={[styles.altBar, styles.altBarLayout]} />
        <Text style={[styles.ekle, styles.ekleTypo]}>Ekle</Text>
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
  menubar1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  arkaPlanLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  property1defaultPosition: {
    left: 20,
    position: "absolute",
  },
  nihaiLayout: {
    height: 231,
    width: 393,
    left: 0,
    position: "absolute",
  },
  altBarLayout: {
    height: 60,
    width: 393,
    left: 0,
    position: "absolute",
  },
  adresEkleButtonLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  ekleTypo: {
    color: Color.black,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  menubar1: {
    backgroundColor: Color.brown_100,
  },
  profilim: {
    left: 81,
    fontSize: FontSize.size_13xl,
    color: Color.white,
    width: 238,
    height: 50,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    top: 24,
    position: "absolute",
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
    top: 24,
    position: "absolute",
  },
  menubar: {
    height: 103,
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
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
    top: 537,
    backgroundColor: Color.peru,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 303,
    height: 40,
    left: 45,
  },
  property1default: {
    top: 20,
    height: 683,
    width: 393,
  },
  arkaPlan: {
    top: 83,
    left: -20,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 433,
    height: 723,
  },
  property1defaultInner: {
    height: "104.17%",
    width: "101.8%",
    top: "-2.08%",
    right: "-0.9%",
    bottom: "-2.08%",
    left: "-0.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  balk1: {
    top: 10,
    left: 45,
    textAlign: "center",
  },
  ellipseIcon: {
    left: 15,
    width: 24,
    height: 24,
    top: 10,
    position: "absolute",
  },
  adresTanm1: {
    bottom: 31,
    left: 27,
    textAlign: "left",
    width: 283,
    height: 68,
  },
  property1default1: {
    top: 19,
    width: 333,
    height: 144,
  },
  adresBlou: {
    top: 286,
    left: 4,
    width: 373,
    height: 196,
  },
  altBar: {
    top: 726,
    backgroundColor: Color.brown_100,
  },
  ekle: {
    top: 648,
    left: 170,
    textAlign: "center",
  },
  adresEkleme: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default AdresEkleme;

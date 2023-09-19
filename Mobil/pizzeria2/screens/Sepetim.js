import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Sepetim = () => {
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
      <View style={styles.sepetim}>
        <View style={[styles.menubar, styles.altBarLayout1]}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={[styles.profilim, styles.menu1Position]}>Sepetim</Text>
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
        <View style={styles.arkaPlandefault}>
          <View
            style={[styles.arkaPlandefaultChild, styles.menubar1Position]}
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
        </View>
        <View style={styles.sepetBildirgesi}>
          <View
            style={[styles.property1default, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Text style={styles.cocaCola1}>COCA COLA 1 LT</Text>
            <Text style={[styles.tl, styles.tlClr]}>40 TL</Text>
            <Image
              style={styles.image35Icon}
              contentFit="cover"
              source={require("../assets/image-35.png")}
            />
            <View style={styles.property1defaultItem} />
            <Text style={[styles.text, styles.tlClr]}>1</Text>
            <Text style={[styles.text1, styles.textTypo]}>+</Text>
            <Text style={[styles.text2, styles.textTypo]}>-</Text>
          </View>
          <View
            style={[styles.property1variant2, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Text style={styles.cocaCola1}>COCA COLA 1 LT</Text>
            <Text style={[styles.tl, styles.tlClr]}>40 TL</Text>
            <Image
              style={styles.image35Icon}
              contentFit="cover"
              source={require("../assets/image-35.png")}
            />
            <View style={styles.property1defaultItem} />
            <Text style={[styles.text, styles.tlClr]}>1</Text>
            <Text style={[styles.text1, styles.textTypo]}>+</Text>
            <Text style={[styles.text2, styles.textTypo]}>-</Text>
          </View>
          <View
            style={[styles.property1variant3, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Text style={styles.cocaCola1}>COCA COLA 1 LT</Text>
            <Text style={[styles.tl, styles.tlClr]}>40 TL</Text>
            <Image
              style={styles.image35Icon}
              contentFit="cover"
              source={require("../assets/image-35.png")}
            />
            <View style={styles.property1defaultItem} />
            <Text style={[styles.text, styles.tlClr]}>1</Text>
            <Text style={[styles.text1, styles.textTypo]}>+</Text>
            <Text style={[styles.text2, styles.textTypo]}>-</Text>
          </View>
        </View>
        <View style={[styles.sepetBildirgesidemeButonu, styles.altBarLayout]}>
          <View
            style={[styles.sepetBildirgesidemeButonuChild, styles.childLayout]}
          />
          <Text style={styles.spetOnaylaVe}>SPETİ ONAYLA VE ÖDEMEYE GEÇ</Text>
        </View>
        <View style={[styles.altBar, styles.altBarLayout]} />
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
  altBarLayout1: {
    width: 393,
    left: 0,
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
  menu1Position: {
    top: 24,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  nihaiLayout: {
    height: 231,
    width: 393,
    left: 0,
    position: "absolute",
  },
  property1variantLayout: {
    height: 117,
    width: 324,
    left: 20,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  tlClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.brown_100,
    width: "2.47%",
    height: "15.54%",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    top: "38.46%",
    textAlign: "left",
    position: "absolute",
  },
  altBarLayout: {
    height: 60,
    position: "absolute",
  },
  menubar1: {
    backgroundColor: Color.brown_100,
  },
  profilim: {
    left: 81,
    fontSize: FontSize.size_17xl,
    color: Color.white,
    textAlign: "center",
    width: 238,
    height: 50,
    fontFamily: FontFamily.interRegular,
  },
  icon: {
    height: "100%",
  },
  sepetv21: {
    left: 319,
    right: 19,
    height: 36,
    top: 22,
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
    top: 0,
    position: "absolute",
  },
  arkaPlandefaultChild: {
    backgroundColor: Color.gainsboro_100,
  },
  nihaiInV33: {
    top: 0,
  },
  nihaiInV34: {
    top: 231,
  },
  nihaiInV35: {
    top: 462,
  },
  arkaPlandefault: {
    top: 102,
    left: 1,
    height: 683,
    backgroundColor: Color.white,
    width: 393,
    position: "absolute",
  },
  property1defaultChild: {
    height: "105.13%",
    width: "101.85%",
    top: "-2.56%",
    right: "-0.93%",
    bottom: "-2.56%",
    left: "-0.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cocaCola1: {
    height: "28.21%",
    width: "42.59%",
    top: "14.53%",
    left: "48.46%",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.gray_100,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  tl: {
    top: "75.21%",
    left: "81.17%",
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  image35Icon: {
    top: 17,
    left: 82,
    width: 80,
    height: 73,
    position: "absolute",
  },
  property1defaultItem: {
    height: "21.58%",
    width: "18.83%",
    right: "74.69%",
    bottom: "39.96%",
    left: "6.48%",
    top: "38.46%",
    backgroundColor: Color.white,
    position: "absolute",
  },
  text: {
    height: "12.95%",
    width: "1.85%",
    top: "43.64%",
    left: "8.64%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  text1: {
    left: "12.96%",
    fontSize: FontSize.size_mid,
  },
  text2: {
    left: "20.99%",
    fontSize: FontSize.size_lgi,
  },
  property1default: {
    top: 20,
  },
  property1variant2: {
    top: 157,
  },
  property1variant3: {
    top: 294,
  },
  sepetBildirgesi: {
    top: 109,
    left: 15,
    borderRadius: Border.br_8xs,
    width: 364,
    height: 568,
    position: "absolute",
    overflow: "hidden",
  },
  sepetBildirgesidemeButonuChild: {
    height: "113.33%",
    width: "103%",
    top: "-6.67%",
    right: "-1.5%",
    bottom: "-6.67%",
    left: "-1.5%",
    backgroundColor: Color.peru,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4,
  },
  spetOnaylaVe: {
    marginLeft: -108.5,
    left: "50%",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    top: 22,
    position: "absolute",
  },
  sepetBildirgesidemeButonu: {
    top: 617,
    left: 63,
    width: 267,
  },
  altBar: {
    top: 726,
    width: 393,
    left: 0,
    backgroundColor: Color.brown_100,
  },
  sepetim: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default Sepetim;

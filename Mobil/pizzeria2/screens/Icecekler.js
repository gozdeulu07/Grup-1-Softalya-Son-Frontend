import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Icecekler = () => {
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
      <View style={styles.ecekler}>
        <View style={styles.menubar}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={[styles.profilim, styles.menu1Position]}>İçecekler</Text>
          <Pressable
            style={styles.sepetv21}
            onPress={() => navigation.navigate("Sepetim")}
          >
            <Image
              style={styles.iconLayout}
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
        <View style={styles.arkaPlan}>
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
              style={[styles.property1defaultItem, styles.altBarLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-13.png")}
            />
          </View>
        </View>
        <View style={[styles.eceklerInner, styles.standWrapperLayout]}>
          <View style={[styles.frameWrapper, styles.standWrapperLayout]}>
            <View style={[styles.rnStandWrapper, styles.standWrapperLayout]}>
              <View style={[styles.rnStand, styles.standWrapperLayout]}>
                <View
                  style={[
                    styles.property1default1,
                    styles.property1variantLayout,
                  ]}
                >
                  <Image
                    style={[styles.rnStandIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/rn-stand3.png")}
                  />
                  <Image
                    style={styles.image35Icon}
                    contentFit="cover"
                    source={require("../assets/image-351.png")}
                  />
                  <Text style={styles.tl}>40TL</Text>
                  <Text style={[styles.cocaCola1, styles.cocaCola1Typo]}>
                    COCA COLA 1 LT
                  </Text>
                </View>
                <View
                  style={[
                    styles.property1variant2,
                    styles.property1variantLayout,
                  ]}
                >
                  <Image
                    style={[styles.rnStandIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/rn-stand3.png")}
                  />
                  <Text style={styles.tl}>30TL</Text>
                  <Text style={[styles.fuseTeaEftal, styles.fuseTypo]}>
                    FUSE TEA ŞEFTALİ 1 LT
                  </Text>
                  <Image
                    style={[styles.image45Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/image-45.png")}
                  />
                </View>
                <View
                  style={[
                    styles.property1variant3,
                    styles.property1variantLayout,
                  ]}
                >
                  <Image
                    style={[styles.rnStandIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/rn-stand.png")}
                  />
                  <Text style={styles.tl}>30TL</Text>
                  <Text style={[styles.fuseTeaLmon, styles.fuseTypo]}>
                    FUSE TEA LİMON 1 LT
                  </Text>
                  <Image
                    style={[styles.image46Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/image-46.png")}
                  />
                </View>
                <View
                  style={[
                    styles.property1variant4,
                    styles.property1variantLayout,
                  ]}
                >
                  <Image
                    style={[styles.rnStandIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/rn-stand.png")}
                  />
                  <Image
                    style={styles.image47Icon}
                    contentFit="cover"
                    source={require("../assets/image-47.png")}
                  />
                  <Text style={styles.tl}>30TL</Text>
                  <Text style={[styles.sprite1Lt, styles.cocaCola1Typo]}>
                    SPRITE 1 LT
                  </Text>
                </View>
                <View
                  style={[
                    styles.property1variant5,
                    styles.property1variantLayout,
                  ]}
                >
                  <Image
                    style={[styles.rnStandIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/rn-stand.png")}
                  />
                  <Text style={styles.tl}>30TL</Text>
                  <Text style={[styles.sprite1Lt, styles.cocaCola1Typo]}>
                    FANTA 1 LT
                  </Text>
                  <Image
                    style={[styles.image44Icon, styles.property1variantLayout]}
                    contentFit="cover"
                    source={require("../assets/image-44.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.image44} />
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
  menubar1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  menu1Position: {
    top: 24,
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
    position: "absolute",
  },
  standWrapperLayout: {
    width: 403,
    position: "absolute",
  },
  property1variantLayout: {
    height: 135,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  cocaCola1Typo: {
    color: Color.gray_100,
    top: 17,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  fuseTypo: {
    top: 18,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconPosition: {
    height: 123,
    top: 6,
    position: "absolute",
  },
  menubar1: {
    height: "100%",
    backgroundColor: Color.brown_100,
  },
  profilim: {
    left: 81,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
    width: 238,
    height: 50,
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
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
  },
  property1defaultChild: {
    backgroundColor: Color.gainsboro_100,
    height: "100%",
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
  property1defaultItem: {
    top: 623,
    left: 0,
  },
  property1default: {
    left: 20,
    height: 683,
    top: 20,
    width: 393,
    position: "absolute",
  },
  arkaPlan: {
    top: 83,
    left: -20,
    width: 433,
    height: 723,
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  rnStandIcon: {
    borderRadius: Border.br_31xl,
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  image35Icon: {
    top: 14,
    left: -11,
    width: 192,
    height: 107,
    position: "absolute",
  },
  tl: {
    left: 274,
    color: Color.black,
    width: 54,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 93,
    position: "absolute",
  },
  cocaCola1: {
    left: 124,
  },
  property1default1: {
    width: 373,
    height: 135,
    left: 11,
    top: 20,
  },
  fuseTeaEftal: {
    left: 120,
  },
  image45Icon: {
    width: 111,
    left: 10,
  },
  property1variant2: {
    top: 165,
    left: 10,
    width: 373,
    height: 135,
  },
  fuseTeaLmon: {
    left: 125,
  },
  image46Icon: {
    left: 32,
    width: 67,
  },
  property1variant3: {
    top: 310,
    left: 10,
    width: 373,
    height: 135,
  },
  image47Icon: {
    left: 18,
    width: 92,
    top: 17,
    height: 103,
    position: "absolute",
  },
  sprite1Lt: {
    left: 156,
  },
  property1variant4: {
    top: 455,
    left: 10,
    width: 373,
    height: 135,
  },
  image44Icon: {
    width: 124,
    left: 0,
    top: 0,
  },
  property1variant5: {
    top: 600,
    left: 10,
    width: 373,
    height: 135,
  },
  rnStand: {
    height: 890,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  rnStandWrapper: {
    height: 626,
    left: 0,
    top: 0,
  },
  frameWrapper: {
    top: 10,
    height: 880,
    left: 0,
  },
  eceklerInner: {
    left: 1,
    height: 635,
    top: 93,
    width: 403,
  },
  image44: {
    top: 538,
    left: 3,
    width: 157,
    height: 151,
    position: "absolute",
  },
  altBar: {
    top: 728,
    left: 11,
    backgroundColor: Color.brown_100,
  },
  ecekler: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default Icecekler;

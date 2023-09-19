import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import UrunInceleme from "../components/UrunInceleme";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Pizzalar = () => {
  const navigation = useNavigation();
  const [menu1IconVisible, setMenu1IconVisible] = useState(false);
  const [
    property1DefaultContainer1Visible,
    setProperty1DefaultContainer1Visible,
  ] = useState(false);

  const openMenu1Icon = useCallback(() => {
    setMenu1IconVisible(true);
  }, []);

  const closeMenu1Icon = useCallback(() => {
    setMenu1IconVisible(false);
  }, []);

  const openProperty1DefaultContainer1 = useCallback(() => {
    setProperty1DefaultContainer1Visible(true);
  }, []);

  const closeProperty1DefaultContainer1 = useCallback(() => {
    setProperty1DefaultContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.pzzalar}>
        <View style={[styles.menubar, styles.menubarPosition]}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={[styles.profilim, styles.menu1Position]}>Pizzalar</Text>
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
        <View style={[styles.arkaPlan, styles.rnStandLayout]}>
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
        <View style={[styles.pzzalarInner, styles.pzzalarInnerLayout]}>
          <View style={[styles.rnStandWrapper, styles.pzzalarInnerLayout]}>
            <View style={[styles.rnStand, styles.rnStandLayout]}>
              <Pressable
                style={[
                  styles.property1default1,
                  styles.property1variantLayout,
                ]}
                onPress={openProperty1DefaultContainer1}
              >
                <Image
                  style={[styles.rnStandIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rn-stand.png")}
                />
                <Text style={[styles.tl, styles.tlFlexBox]}>120TL</Text>
                <Image
                  style={styles.image10Icon}
                  contentFit="cover"
                  source={require("../assets/image-102.png")}
                />
                <Text style={[styles.klasikPizza, styles.tlFlexBox]}>
                  KLASIK PIZZA
                </Text>
                <Text style={[styles.mantarKaarPeyniri, styles.tlFlexBox]}>
                  Mantar, kaşar peyniri, domates, sucuk, salam ve sosis
                </Text>
              </Pressable>
              <View
                style={[
                  styles.property1variant2,
                  styles.property1variantLayout,
                ]}
              >
                <Image
                  style={[styles.rnStandIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rn-stand.png")}
                />
                <Text style={[styles.tl, styles.tlFlexBox]}>120TL</Text>
                <Image
                  style={styles.image10Icon}
                  contentFit="cover"
                  source={require("../assets/image-102.png")}
                />
                <Text style={[styles.klasikPizza, styles.tlFlexBox]}>
                  KLASIK PIZZA
                </Text>
                <Text style={[styles.mantarKaarPeyniri, styles.tlFlexBox]}>
                  Mantar, kaşar peyniri, domates, sucuk, salam ve sosis
                </Text>
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
                <Text style={[styles.tl, styles.tlFlexBox]}>120TL</Text>
                <Image
                  style={styles.image10Icon}
                  contentFit="cover"
                  source={require("../assets/image-102.png")}
                />
                <Text style={[styles.klasikPizza, styles.tlFlexBox]}>
                  KLASIK PIZZA
                </Text>
                <Text style={[styles.mantarKaarPeyniri, styles.tlFlexBox]}>
                  Mantar, kaşar peyniri, domates, sucuk, salam ve sosis
                </Text>
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
                <Text style={[styles.tl, styles.tlFlexBox]}>120TL</Text>
                <Image
                  style={styles.image10Icon}
                  contentFit="cover"
                  source={require("../assets/image-102.png")}
                />
                <Text style={[styles.klasikPizza, styles.tlFlexBox]}>
                  KLASIK PIZZA
                </Text>
                <Text style={[styles.mantarKaarPeyniri, styles.tlFlexBox]}>
                  Mantar, kaşar peyniri, domates, sucuk, salam ve sosis
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
                <Text style={[styles.tl, styles.tlFlexBox]}>120TL</Text>
                <Image
                  style={styles.image10Icon}
                  contentFit="cover"
                  source={require("../assets/image-102.png")}
                />
                <Text style={[styles.klasikPizza, styles.tlFlexBox]}>
                  KLASIK PIZZA
                </Text>
                <Text style={[styles.mantarKaarPeyniri, styles.tlFlexBox]}>
                  Mantar, kaşar peyniri, domates, sucuk, salam ve sosis
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.altBar, styles.altBarLayout]} />
      </View>

      <Modal animationType="fade" transparent visible={menu1IconVisible}>
        <View style={styles.menu1IconOverlay}>
          <Pressable style={styles.menu1IconBg} onPress={closeMenu1Icon} />
          <FrameComponent onClose={closeMenu1Icon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={property1DefaultContainer1Visible}
      >
        <View style={styles.property1DefaultContainer1Overlay}>
          <Pressable
            style={styles.property1DefaultContainer1Bg}
            onPress={closeProperty1DefaultContainer1}
          />
          <UrunInceleme onClose={closeProperty1DefaultContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menubarPosition: {
    left: 0,
    width: 393,
    top: 0,
  },
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
  rnStandLayout: {
    borderRadius: Border.br_8xs,
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
  pzzalarInnerLayout: {
    height: 623,
    width: 393,
    left: 0,
    position: "absolute",
  },
  property1variantLayout: {
    height: 135,
    width: 373,
    left: 10,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  tlFlexBox: {
    textAlign: "left",
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
    textAlign: "center",
    width: 238,
    height: 50,
    color: Color.white,
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
  },
  property1DefaultContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  property1DefaultContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
  tl: {
    top: 93,
    left: 274,
    color: Color.black,
    width: 54,
    height: 30,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
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
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  mantarKaarPeyniri: {
    top: 47,
    left: 126,
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 163,
    height: 49,
    color: Color.white,
  },
  property1default1: {
    top: 20,
  },
  property1variant2: {
    top: 165,
  },
  property1variant3: {
    top: 310,
  },
  property1variant4: {
    top: 455,
  },
  property1variant5: {
    top: 600,
  },
  rnStand: {
    height: 900,
    width: 393,
    left: 0,
    top: 0,
  },
  rnStandWrapper: {
    top: 0,
  },
  pzzalarInner: {
    top: 103,
  },
  altBar: {
    top: 726,
    backgroundColor: Color.brown_100,
  },
  pzzalar: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default Pizzalar;

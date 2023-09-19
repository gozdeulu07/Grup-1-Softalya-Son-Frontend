import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameScreen1 = () => {
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
      <View style={styles.itirLezzetlerParent}>
        <View style={styles.itirLezzetler}>
          <View style={[styles.menubar, styles.menubarLayout]}>
            <View style={[styles.menubar1, styles.menubar1Position]} />
            <Text style={styles.profilim}>Çıtır Lezzetler</Text>
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
            <Pressable style={styles.menu1} onPress={openMenu1Icon}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/menu-1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.arkaPlan}>
            <View style={[styles.property1default, styles.menubarLayout]}>
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
          <View
            style={[styles.itirLezzetlerInner, styles.rnStandWrapperLayout]}
          >
            <View style={[styles.rnStandWrapper, styles.rnStandWrapperLayout]}>
              <View style={styles.rnStand}>
                <View
                  style={[
                    styles.property1default1,
                    styles.property1variantLayout,
                  ]}
                >
                  <Image
                    style={[styles.rnStandIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/rn-stand.png")}
                  />
                  <Image
                    style={styles.image32Icon}
                    contentFit="cover"
                    source={require("../assets/image-32.png")}
                  />
                  <Text style={styles.tl}>30 TL</Text>
                  <Text style={[styles.patatesKizartmasi, styles.lButTypo]}>
                    PATATES KIZARTMASI
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
                    source={require("../assets/rn-stand.png")}
                  />
                  <Text style={styles.tl}>30 TL</Text>
                  <Text style={[styles.soanHalkasi, styles.lButTypo]}>
                    SOĞAN HALKASI
                  </Text>
                  <Image
                    style={[styles.image33Icon, styles.property1variantLayout]}
                    contentFit="cover"
                    source={require("../assets/image-33.png")}
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
                  <Text style={styles.tl}>35 TL</Text>
                  <Text style={[styles.liNugget, styles.lButTypo]}>
                    6’LI NUGGET
                  </Text>
                  <Image
                    style={styles.image34Icon}
                    contentFit="cover"
                    source={require("../assets/image-34.png")}
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
                    style={[styles.image30Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/image-30.png")}
                  />
                  <Text style={styles.tl}>40 TL</Text>
                  <Text style={[styles.lKanat, styles.lButTypo]}>
                    4’LÜ KANAT
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
                  <Image
                    style={styles.image43Icon}
                    contentFit="cover"
                    source={require("../assets/image-43.png")}
                  />
                  <Text style={styles.tl}>40 TL</Text>
                  <Text style={[styles.lBut, styles.lButTypo]}>2’Lİ BUT</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.altBar, styles.altBarLayout]} />
        </View>
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
  menubarLayout: {
    width: 393,
    position: "absolute",
  },
  menubar1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
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
  rnStandWrapperLayout: {
    height: 623,
    width: 403,
    left: 0,
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
  lButTypo: {
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  menubar1: {
    height: "100%",
    backgroundColor: Color.brown_100,
  },
  profilim: {
    left: 81,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
    width: 238,
    height: 50,
    top: 24,
    position: "absolute",
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
    left: 0,
    top: 0,
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
  },
  arkaPlan: {
    top: 83,
    left: -20,
    width: 433,
    height: 723,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
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
  image32Icon: {
    left: 27,
    width: 71,
    height: 86,
    top: 17,
    position: "absolute",
  },
  tl: {
    top: 93,
    left: 274,
    color: Color.black,
    width: 54,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  patatesKizartmasi: {
    top: 30,
    left: 122,
  },
  property1default1: {
    width: 373,
    left: 10,
    height: 135,
    top: 20,
  },
  soanHalkasi: {
    left: 129,
    top: 24,
  },
  image33Icon: {
    width: 129,
    left: 0,
    top: 0,
  },
  property1variant2: {
    top: 165,
    width: 373,
    left: 10,
    height: 135,
  },
  liNugget: {
    left: 126,
    top: 17,
  },
  image34Icon: {
    left: 9,
    width: 117,
    height: 91,
    top: 17,
    position: "absolute",
  },
  property1variant3: {
    top: 310,
    width: 373,
    left: 10,
    height: 135,
  },
  image30Icon: {
    width: 145,
    height: 123,
    position: "absolute",
  },
  lKanat: {
    left: 127,
    top: 17,
  },
  property1variant4: {
    top: 455,
    width: 373,
    left: 10,
    height: 135,
  },
  image43Icon: {
    top: 21,
    left: 16,
    width: 126,
    height: 93,
    position: "absolute",
  },
  lBut: {
    left: 142,
    top: 17,
  },
  property1variant5: {
    top: 600,
    width: 373,
    left: 10,
    height: 135,
  },
  rnStand: {
    height: 890,
    width: 403,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rnStandWrapper: {
    top: 0,
  },
  itirLezzetlerInner: {
    top: 103,
  },
  altBar: {
    top: 726,
    backgroundColor: Color.brown_100,
  },
  itirLezzetler: {
    height: 786,
    overflow: "hidden",
    width: 393,
    backgroundColor: Color.brown_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  itirLezzetlerParent: {
    flex: 1,
    height: 726,
    width: "100%",
  },
});

export default FrameScreen1;

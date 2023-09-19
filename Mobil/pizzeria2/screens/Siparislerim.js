import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Siparislerim = () => {
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
      <View style={styles.sparilerm}>
        <View style={styles.menubar}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={styles.profilim}>Siparişlerim</Text>
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
        <View style={[styles.property1defaultParent, styles.arkaPlanLayout]}>
          <View
            style={[styles.property1default1, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.rectangleViewLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Text style={[styles.xxxxxxxx1905, styles.xxxxxxxx1905Typo]}>
              XX.XX.XXXX - 19:05 tarihli sipariş
            </Text>
            <Text
              style={[styles.sipariIdA1d49sdf, styles.detayTypo]}
            >{`sipariş ID: a1d49sdf - $22,18                                          

sipariş özeti: karışık pizza x 5, ........`}</Text>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <Text style={[styles.detay, styles.detayTypo]}>DETAY</Text>
          </View>
          <View
            style={[styles.property1variant2, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.rectangleViewLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Text style={[styles.xxxxxxxx1905, styles.xxxxxxxx1905Typo]}>
              XX.XX.XXXX - 19:05 tarihli sipariş
            </Text>
            <Text
              style={[styles.sipariIdA1d49sdf, styles.detayTypo]}
            >{`sipariş ID: a1d49sdf - $22,18                                          

sipariş özeti: karışık pizza x 5, ........`}</Text>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <Text style={[styles.detay, styles.detayTypo]}>DETAY</Text>
          </View>
          <View
            style={[styles.property1variant3, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.rectangleViewLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Text style={[styles.xxxxxxxx1905, styles.xxxxxxxx1905Typo]}>
              XX.XX.XXXX - 19:05 tarihli sipariş
            </Text>
            <Text
              style={[styles.sipariIdA1d49sdf, styles.detayTypo]}
            >{`sipariş ID: a1d49sdf - $22,18                                          

sipariş özeti: karışık pizza x 5, ........`}</Text>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <Text style={[styles.detay, styles.detayTypo]}>DETAY</Text>
          </View>
          <View
            style={[styles.property1variant4, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.rectangleViewLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Text style={[styles.xxxxxxxx1905, styles.xxxxxxxx1905Typo]}>
              XX.XX.XXXX - 19:05 tarihli sipariş
            </Text>
            <Text
              style={[styles.sipariIdA1d49sdf, styles.detayTypo]}
            >{`sipariş ID: a1d49sdf - $22,18                                          

sipariş özeti: karışık pizza x 5, ........`}</Text>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <Text style={[styles.detay, styles.detayTypo]}>DETAY</Text>
          </View>
          <View
            style={[styles.property1variant5, styles.property1variantLayout]}
          >
            <Image
              style={[styles.property1defaultInner, styles.rectangleViewLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Text style={[styles.xxxxxxxx1905, styles.xxxxxxxx1905Typo]}>
              XX.XX.XXXX - 19:05 tarihli sipariş
            </Text>
            <Text
              style={[styles.sipariIdA1d49sdf, styles.detayTypo]}
            >{`sipariş ID: a1d49sdf - $22,18                                          

sipariş özeti: karışık pizza x 5, ........`}</Text>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <Text style={[styles.detay, styles.detayTypo]}>DETAY</Text>
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
  property1variantLayout: {
    height: 100,
    width: 333,
    left: 20,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  xxxxxxxx1905Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  detayTypo: {
    fontSize: FontSize.size_xs,
    position: "absolute",
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
  property1default: {
    height: 683,
    left: 20,
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
  property1defaultInner: {
    height: "106%",
    width: "101.8%",
    top: "-3%",
    right: "-0.9%",
    bottom: "-3%",
    left: "-0.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  xxxxxxxx1905: {
    height: "32%",
    marginLeft: -154.5,
    top: "11%",
    left: "50%",
    fontSize: FontSize.size_base,
    width: 307,
    color: Color.black,
    position: "absolute",
  },
  sipariIdA1d49sdf: {
    top: 38,
    left: 17,
    color: Color.dimgray,
    width: 212,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  rectangleView: {
    top: 55,
    left: 231,
    backgroundColor: Color.peru,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: 91,
    height: 30,
  },
  detay: {
    top: 62,
    left: 241,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 71,
    height: 18,
    color: Color.black,
    textAlign: "center",
  },
  property1default1: {
    top: 20,
    height: 100,
    width: 333,
  },
  property1variant2: {
    top: 143,
  },
  property1variant3: {
    top: 266,
  },
  property1variant4: {
    top: 389,
  },
  property1variant5: {
    top: 512,
  },
  property1defaultParent: {
    top: 115,
    left: 10,
    width: 373,
    height: 632,
  },
  altBar: {
    top: 726,
    backgroundColor: Color.brown_100,
  },
  sparilerm: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default Siparislerim;

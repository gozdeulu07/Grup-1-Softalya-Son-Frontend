import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Anamenu = () => {
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
      <View style={styles.anaMen}>
        <View style={styles.arkaPlan}>
          <View style={styles.property1default}>
            <View
              style={[styles.property1defaultChild, styles.menu11Position]}
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
            <View
              style={[
                styles.property1defaultInner,
                styles.property1defaultLayout,
              ]}
            />
            <View
              style={[styles.rectangleView, styles.property1defaultLayout]}
            />
            <View
              style={[
                styles.property1defaultInner,
                styles.property1defaultLayout,
              ]}
            />
            <View
              style={[
                styles.property1defaultChild2,
                styles.property1defaultLayout,
              ]}
            />
          </View>
        </View>
        <Text style={[styles.pizzalar, styles.eceklerTypo]}>PIZZALAR</Text>
        <Text style={styles.itirLezzetler}>ÇITIR LEZZETLER</Text>
        <Text style={[styles.ecekler, styles.eceklerTypo]}>İÇIcecekler</Text>
        <Pressable
          style={[styles.pizzalar1, styles.ieceklerLayout]}
          onPress={() => navigation.navigate("Pizzalar")}
        >
          <View style={styles.pizzalar2} />
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-41.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iecekler, styles.ieceklerLayout]}
          onPress={() => navigation.navigate("Icecekler")}
        >
          <View style={styles.pizzalar2} />
          <Image
            style={styles.image35Icon}
            contentFit="cover"
            source={require("../assets/image-352.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.trLezzetler, styles.ieceklerLayout]}
          onPress={() => navigation.navigate("Frame3")}
        >
          <View style={styles.pizzalar2} />
          <Image
            style={styles.image33Icon}
            contentFit="cover"
            source={require("../assets/image-331.png")}
          />
        </Pressable>
        <Image
          style={[styles.anaMenResim, styles.menPosition]}
          contentFit= "cover"
          source={require("../assets/ana-men-resim.png")}
        />
        <View style={[styles.stMen, styles.menPosition]} />
        <View style={[styles.altBar, styles.altBarLayout]} />
        <Image
          style={styles.sepetv21Icon}
          contentFit="cover"
          source={require("../assets/sepetv2-1.png")}
        />
        <Text style={styles.anaSayfa}>{`Ana sayfa
`}</Text>
        <View style={styles.menu1}>
          <Pressable
            style={styles.menu11Position}
            mode="contained"
            onPress={openMenu1Icon}
            contentStyle={styles.menu1IconBtn}
          >
           <Image
           style={styles.sepetv21Icon}
           contentFit="cover"
           source={require("../assets/sepetv2-1.png")}
           /> 
          </Pressable>
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
  menu1IconBtn: {
    height: "100%",
    width: "100%",
  },
  menu11Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  nihaiLayout: {
    height: 231,
    left: 0,
    width: 393,
    position: "absolute",
  },
  altBarLayout: {
    height: 60,
    left: 0,
    width: 393,
    position: "absolute",
  },
  property1defaultLayout: {
    height: 22,
    backgroundColor: Color.black,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  eceklerTypo: {
    width: 98,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    height: 22,
    position: "absolute",
  },
  ieceklerLayout: {
    height: 140,
    width: 140,
    position: "absolute",
  },
  menPosition: {
    left: 0,
    width: 393,
    position: "absolute",
  },
  property1defaultChild: {
    height: "100%",
    backgroundColor: Color.gainsboro_100,
    width: "100%",
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
  property1defaultInner: {
    left: 43,
    width: 122,
    top: 244,
    backgroundColor: Color.black,
  },
  rectangleView: {
    left: 228,
    width: 121,
    top: 244,
    backgroundColor: Color.black,
  },
  property1defaultChild2: {
    top: 440,
    left: 138,
    width: 116,
  },
  property1default: {
    left: 20,
    height: 683,
    width: 393,
    top: 20,
    position: "absolute",
  },
  arkaPlan: {
    top: 83,
    left: -20,
    borderRadius: Border.br_8xs,
    width: 433,
    height: 723,
    position: "absolute",
    overflow: "hidden",
  },
  pizzalar: {
    left: 55,
    top: 347,
    width: 98,
  },
  itirLezzetler: {
    left: 235,
    width: 106,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.white,
    top: 347,
    height: 22,
    position: "absolute",
  },
  ecekler: {
    top: 543,
    left: 147,
  },
  pizzalar2: {
    height: "107.14%",
    width: "107.14%",
    top: "-3.57%",
    right: "-3.57%",
    bottom: "-3.57%",
    left: "-3.57%",
    backgroundColor: Color.peru,
    borderStyle: "solid",
    borderColor: "#bf3d3d",
    borderWidth: 5,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  image4Icon: {
    top: 15,
    left: 9,
    borderRadius: Border.br_90xl,
    width: 123,
    height: 111,
    position: "absolute",
  },
  pizzalar1: {
    top: 379,
    left: 35,
  },
  image35Icon: {
    top: 9,
    left: 32,
    width: 77,
    height: 123,
    position: "absolute",
  },
  iecekler: {
    top: 574,
    left: 126,
  },
  image33Icon: {
    top: -3,
    left: 8,
    width: 124,
    height: 147,
    position: "absolute",
  },
  trLezzetler: {
    top: 378,
    left: 219,
  },
  anaMenResim: {
    top: 73,
    height: 260,
  },
  stMen: {
    height: 103,
    top: 0,
    backgroundColor: Color.brown_100,
  },
  altBar: {
    top: 726,
    backgroundColor: Color.brown_100,
  },
  sepetv21Icon: {
    top: 22,
    right: 19,
    left: 319,
    maxWidth: "100%",
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  anaSayfa: {
    left: 77,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.interRegular,
    width: 238,
    height: 50,
    textAlign: "center",
    color: Color.white,
    top: 20,
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
  menu1: {
    top: 24,
    left: 26,
    width: 34,
    height: 34,
    position: "absolute",
  },
  anaMen: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default Anamenu;

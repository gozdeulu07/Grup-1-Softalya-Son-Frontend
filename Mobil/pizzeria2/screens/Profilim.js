import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Profilim = () => {
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
      <View style={styles.proflm}>
        <View style={[styles.arkaPlan, styles.soyisimLayout]}>
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
        <View style={[styles.menubar, styles.menubarLayout]}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={styles.profilim}>Profilim</Text>
          <Pressable
            style={styles.sepetv21}
            onPress={() => navigation.navigate("Sepetim")}
          >
            <Image
              style={styles.icon}
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
        <View style={[styles.altBar, styles.altBarLayout]} />
        <View style={[styles.soyisim, styles.soyisimLayout]}>
          <View
            style={[styles.property1default1, styles.property1defaultLayout]}
          >
            <View
              style={[
                styles.property1defaultInner,
                styles.property1defaultChildBorder,
              ]}
            />
            <Text style={styles.simLorem}>İsim: Lorem</Text>
          </View>
          <View
            style={[styles.property1default2, styles.property1defaultPosition]}
          >
            <View
              style={[
                styles.property1defaultInner,
                styles.property1defaultChildBorder,
              ]}
            />
            <Text style={styles.simLorem}>Soyisim: Ipsum</Text>
          </View>
          <View
            style={[styles.property1default3, styles.property1defaultPosition]}
          >
            <View
              style={[
                styles.property1defaultChild1,
                styles.property1defaultChildBorder,
              ]}
            />
            <Text style={styles.simLorem}>Telefon: 0555 555 55 55</Text>
          </View>
          <View
            style={[styles.property1default4, styles.property1defaultLayout]}
          >
            <View
              style={[
                styles.property1defaultInner,
                styles.property1defaultChildBorder,
              ]}
            />
            <Text style={styles.simLorem}>e-mail: loremipsum@gmail.com</Text>
          </View>
          <View
            style={[styles.property1default5, styles.property1defaultPosition]}
          >
            <View
              style={[
                styles.property1defaultChild3,
                styles.property1defaultChildPosition,
              ]}
            />
            <Text
              style={styles.simLorem4}
            >{`Güncel adres: lorem ipsum amet bla bla bla
`}</Text>
          </View>
        </View>
        <View style={[styles.property1defaultParent, styles.soyisimLayout]}>
          <View style={styles.property1default6}>
            <View
              style={[
                styles.property1defaultChild4,
                styles.property1defaultChildPosition,
              ]}
            />
            <Text style={[styles.freDetr, styles.detrFlexBox]}>
              ŞİFRE DEĞİŞTİR
            </Text>
          </View>
          <View
            style={[styles.property1variant2, styles.property1default2Position]}
          >
            <View
              style={[
                styles.property1defaultChild4,
                styles.property1defaultChildPosition,
              ]}
            />
            <Text style={[styles.adresDetr, styles.detrFlexBox]}>
              ADRES DEĞİŞTİR
            </Text>
          </View>
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
  soyisimLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  menubarLayout: {
    width: 393,
    position: "absolute",
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
  altBarLayout: {
    height: 60,
    left: 0,
    width: 393,
    position: "absolute",
  },
  property1defaultLayout: {
    width: 300,
    height: 40,
    left: 20,
    position: "absolute",
  },
  property1defaultChildBorder: {
    borderWidth: 3,
    borderColor: "#bf3d3d",
    backgroundColor: Color.peachpuff,
    borderRadius: Border.br_11xl,
  },
  property1defaultPosition: {
    left: "50%",
    marginLeft: -150,
    width: 300,
    position: "absolute",
  },
  property1defaultChildPosition: {
    bottom: "-2.5%",
    top: "-2.5%",
    height: "105%",
    borderStyle: "solid",
    position: "absolute",
  },
  detrFlexBox: {
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    top: 0,
    position: "absolute",
  },
  property1default2Position: {
    top: 80,
    height: 40,
  },
  property1defaultChild: {
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
  property1defaultItem: {
    top: 623,
  },
  property1default: {
    height: 683,
    left: 20,
    top: 20,
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
    top: 24,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
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
  altBar: {
    top: 726,
    backgroundColor: Color.brown_100,
  },
  property1defaultInner: {
    height: "115%",
    top: "-7.5%",
    bottom: "-7.5%",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#bf3d3d",
    backgroundColor: Color.peachpuff,
    borderRadius: Border.br_11xl,
    position: "absolute",
    left: "-4.33%",
    right: "-4.33%",
    width: "108.67%",
  },
  simLorem: {
    height: "60%",
    top: "20%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  property1default1: {
    height: 40,
    top: 20,
  },
  property1default2: {
    top: 80,
    height: 40,
  },
  property1defaultChild1: {
    top: -3,
    left: -15,
    width: 328,
    height: 46,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#bf3d3d",
    backgroundColor: Color.peachpuff,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  property1default3: {
    top: 340,
    height: 40,
  },
  property1default4: {
    top: 140,
    backgroundColor: "#a14f4f",
    height: 40,
  },
  property1defaultChild3: {
    borderWidth: 3,
    borderColor: "#bf3d3d",
    backgroundColor: Color.peachpuff,
    borderRadius: Border.br_11xl,
    bottom: "-2.5%",
    top: "-2.5%",
    height: "105%",
    left: "-4.33%",
    right: "-4.33%",
    width: "108.67%",
  },
  simLorem4: {
    height: "77.5%",
    top: "13.33%",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  property1default5: {
    top: 200,
    height: 120,
  },
  soyisim: {
    top: 103,
    left: 28,
    width: 340,
    height: 392,
  },
  property1defaultChild4: {
    width: "121.31%",
    right: "-11.48%",
    left: "-9.84%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.peru,
    borderColor: "#000",
    borderWidth: 1,
  },
  freDetr: {
    left: 13,
    width: 157,
  },
  property1default6: {
    width: 183,
    height: 40,
    left: 20,
    top: 20,
    position: "absolute",
  },
  adresDetr: {
    width: 183,
    left: 0,
  },
  property1variant2: {
    width: 183,
    left: 20,
    position: "absolute",
  },
  property1defaultParent: {
    top: 495,
    left: 85,
    width: 223,
    height: 200,
  },
  proflm: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default Profilim;

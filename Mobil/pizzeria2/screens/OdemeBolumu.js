import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "../components/FrameComponent";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const OdemeBolumu = () => {
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
      <View style={styles.demeBlm}>
        <View style={[styles.menubar, styles.menubarLayout]}>
          <View style={[styles.menubar1, styles.menubar1Position]} />
          <Text style={styles.profilim}>{`Ödeme
`}</Text>
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
            <View
              style={[styles.property1defaultInner, styles.rectangleViewBorder]}
            />
            <Pressable
              style={[styles.adresEkleButton, styles.rectangleViewBorder]}
              onPress={() => navigation.navigate("Adreslerim")}
            />
            <Text style={styles.demeyiOnaylyorum}>Ödemeyi Onaylıyorum</Text>
            <Text style={[styles.kartBilgileri, styles.kartTypo]}>
              KART BILGILERI
            </Text>
            <Text style={[styles.kartNumarasi, styles.kartTypo]}>
              KART NUMARASI:
            </Text>
            <Text style={[styles.kartSahibininAd, styles.kartTypo]}>
              Kart Sahibinin Adı:
            </Text>
            <Text style={[styles.sonKullanmaTarihi, styles.cvvTypo]}>
              SON KULLANMA TARIHI:
            </Text>
            <Text style={[styles.cvv, styles.cvvTypo]}>CVV:</Text>
            <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
            <Text style={[styles.adresToplamCret, styles.kartTypo]}>{`

 adres

toplam ücret vs.`}</Text>
          </View>
        </View>
        <View style={[styles.altBar, styles.altBarLayout]} />
        <Image
          style={[styles.demeBlmChild, styles.demeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <Image
          style={[styles.demeBlmItem, styles.demeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <Image
          style={[styles.demeBlmInner, styles.demePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-20.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.demePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-20.png")}
        />
        <Image
          style={[styles.demeBlmChild1, styles.demePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-20.png")}
        />
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
    height: "100%",
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
  rectangleViewBorder: {
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  kartTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.black,
    position: "absolute",
  },
  cvvTypo: {
    top: "61.49%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.black,
    position: "absolute",
  },
  demeLayout: {
    width: 308,
    maxHeight: "100%",
    height: "3.82%",
    left: "50%",
    position: "absolute",
  },
  demePosition: {
    width: 85,
    bottom: "26.21%",
    top: "69.97%",
    maxHeight: "100%",
    height: "3.82%",
    left: "50%",
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
    width: 393,
    top: 0,
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
  property1defaultInner: {
    top: 244,
    left: 16,
    width: 362,
    height: 264,
    backgroundColor: Color.white,
  },
  adresEkleButton: {
    top: 522,
    left: 45,
    backgroundColor: Color.peru,
    width: 303,
    height: 40,
  },
  demeyiOnaylyorum: {
    top: 530,
    left: 92,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  kartBilgileri: {
    marginLeft: -58.5,
    top: "39.09%",
    left: "50%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  kartNumarasi: {
    top: "53.15%",
    left: "11.7%",
  },
  kartSahibininAd: {
    top: "45.24%",
    left: "11.96%",
  },
  sonKullanmaTarihi: {
    left: "11.96%",
  },
  cvv: {
    left: "67.18%",
  },
  rectangleView: {
    top: 27,
    left: 14,
    width: 366,
    height: 206,
    backgroundColor: Color.white,
  },
  adresToplamCret: {
    top: 57,
    left: 31,
    width: 312,
    height: 160,
  },
  property1default: {
    top: 20,
    left: 20,
    height: 683,
    backgroundColor: Color.white,
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
  altBar: {
    top: 726,
    backgroundColor: Color.brown_100,
  },
  demeBlmChild: {
    marginLeft: -153.5,
    top: "62.34%",
    bottom: "33.84%",
  },
  demeBlmItem: {
    top: "55.47%",
    bottom: "40.71%",
    marginLeft: -154.5,
  },
  demeBlmInner: {
    marginLeft: -154.5,
  },
  rectangleIcon: {
    marginLeft: -57.5,
  },
  demeBlmChild1: {
    marginLeft: 67.5,
  },
  demeBlm: {
    flex: 1,
    height: 786,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.brown_100,
  },
});

export default OdemeBolumu;

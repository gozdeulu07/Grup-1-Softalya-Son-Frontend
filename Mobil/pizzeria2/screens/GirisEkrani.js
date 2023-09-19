import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  Icon,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";


export const TextHolderComp = props => {
  const [text, setText] = React.useState("");
  return (
    <TextInput
    scrollEnabled = "false"
    underlineColorAndroid= "transparent"
    activeUnderlineColor="transparent"
    secureTextEntry = {props.isPassword}
    multiline = {props.multi}
    numberOfLines ={props.line}
    style = {props.style1}
    underlineColor="white"
      placeholder= {props.placeHolderName}
      value={text}
      onChangeText={text => setText(text)}
      
    />
  );
};

const GirisEkrani = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.giriEkran}>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <View>

      <TextHolderComp  style1 = {styles.textInput2}  placeHolderName = "Şifre" isPassword = "true"/>
      <TextHolderComp  style1 = {styles.textInput1}   placeHolderName = "Eposta ya da kullanıcı adı"/>


      </View>
      
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Text style={styles.ifreniMiUnuttun}>Şifreni mi unuttun?</Text>

      <View style={styles.frameView} />
      <Pressable
        style={[styles.oturumAWrapper, styles.giriEkranInnerBg]}
        onPress={() => navigation.navigate("Anamenu")}
      >
        <Text style={[styles.oturumA, styles.oturumATypo]}>OTURUM AÇ</Text>
      </Pressable>
      <Pressable
        style={styles.kayitOl}
        onPress={() => navigation.navigate("KayitOlEkran")}
      >
        <Text style={[styles.kayitOl1, styles.oturumATypo]}>KAYIT OL</Text>
      </Pressable>
      <Image
        style={styles.image36Icon}
        contentFit="cover"
        source={require("../assets/image-36.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  textInput1:{
    left: 90,
    
    backgroundColor: 'white',
    marginTop: 11,
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    fontSize: 20,
    top: 188,
    height: 40,
    width: 270,
    margin: 12,
    padding: 5,
  },
  textInput2:{
    left: 90,
    backgroundColor: 'white',
    marginTop: 11,
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    fontSize: 20,
    top: 330,
    height: 40,
    width: 270,
    margin: 12,
    padding: 5,
  },
  giriLayout: {
    flex: 1,
    height: 51,
    width: 320,
    borderRadius: Border.br_xl,
    left: 36,
    position: "absolute",
  },
  ifrePosition: {
    flex: 1,
    left: 90,
    position: "absolute",
    borderColor: '#48BBEC',
    backgroundColor: 'white',
    marginTop: 11,
    fontSize: 20,

  },
  giriEkranInnerBg: {
    flex: 1,
    backgroundColor: Color.peru,
    position: "absolute",
  },
  oturumATypo: {
    flex: 1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    textAlign: "center",
  },
  image4Icon: {
    flex: 1,
    top: 75,
    left: 131,
    borderRadius: Border.br_90xl,
    width: 130,
    height: 128,
    position: "absolute",
  },
  giriEkranChild: {
    flex: 1,
    top: 273,
  },
  giriEkranItem: {
    flex: 1,
    top: 343,
  },
  ePostaYaDa: {
    flex: 1,
    top: 265,
  },
  image7Icon: {
    flex: 1,
    top: 279,
    left: 46,
    width: 42,
    height: 39,
    position: "absolute",
  },
  ifre: {
    flex: 1,
    top: 360,
  },
  image8Icon: {
    flex: 1,
    top: 355,
    left: 56,
    width: 23,
    height: 26,
    position: "absolute",
  },
  ifreniMiUnuttun: {
    flex: 1,
    top: 406,
    left: 57,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  giriEkranInner: {
    flex: 1,
    top: 522,
    right: 46,
    left: 45,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      flex: 1,
      
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    height: 49,
  },
  frameView: {
    flex: 1,
    top: 488,
    left: 123,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  oturumA: {
    flex: 1,
    color: "#262626",
  },
  oturumAWrapper: {
    flex: 1,
    top: 475,
    left: 80,
    borderRadius: 30,
    borderColor: "#000000",
    borderStyle: "solid",
    width: 250,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  kayitOl1: {
    flex: 1,
    color: Color.peru,
  },
  kayitOl: {
    
    flex: 1,
    left: 165,
    top: 540,
    position: "absolute",
  },
  image36Icon: {
    flex: 1,
    top: 49,
    left: 37,
    width: 306,
    height: 177,
    position: "absolute",
  },
  giriEkran: {
    flex: 1,
    backgroundColor: Color.brown_100,
    flex: 1,
    width: "100%",
    height: 786,
    overflow: "hidden",
  },
});

export default GirisEkrani;

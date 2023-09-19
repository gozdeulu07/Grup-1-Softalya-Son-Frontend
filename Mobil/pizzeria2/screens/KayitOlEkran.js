import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TextInputComponent, View, ScrollView } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { TextInput } from "react-native-paper";

import {TextHolderComp} from "./GirisEkrani";




const KayitOlEkran = () => {
  return (
    <View style={styles.kaytOlEkran}>
      
      <View style = {styles.gap}>
        
          <View style = {styles.flexStyle}>
            
            <Image
              contentFit="cover"
              source={require("../assets/image-48.png")}
              
            />
            <TextHolderComp placeHolderName = "Adınız"/>

          </View>
          
          <View style = {styles.flexStyle}>
              <Image
                
                contentFit="cover"
                source={require("../assets/image-48.png")}
              />
              <TextHolderComp placeHolderName = "Soyadınız">

              </TextHolderComp>
          </View>

          <View style = {styles.flexStyle}>
              <Image
               
                contentFit="cover"
                source={require("../assets/image-7.png")}
            />

              <TextHolderComp placeHolderName = "E-posta">

              </TextHolderComp>
          </View >

          <View style = {styles.flexStyle}> 
              <Image
                
                contentFit="cover"
                source={require("../assets/image-7.png")}
            />
              <TextHolderComp placeHolderName = "Telefon Numarası">

              </TextHolderComp>
          </View>


          <View style = {[styles.flexStyle,styles.address]}>
            <Image
             
              contentFit="cover"
              source={require("../assets/image-54.png")}
            />
            
            <TextHolderComp multi = {true} line = '4' placeHolderName = "Adres" style = {styles.addressWidth}/>

            
                        
          </View>

          <View style = {styles.flexStyle}>
              <Image
                
                contentFit="cover"
                source={require("../assets/image-8.png")}
            />
            <TextHolderComp style placeHolderName = "Şifre">

            </TextHolderComp>
          </View>


          <View style = {styles.flexStyle}>
              <Image
              
                contentFit="cover"
                source={require("../assets/image-8.png")}
            />
            <TextHolderComp placeHolderName = "Şifre tekrar">

            </TextHolderComp>
          </View>

      </View>
  
      
     
     
      <View style={styles.rectangleView} />
      <Text style={[styles.kayitOl, styles.grYapTypo]}>KAYIT OL</Text>
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({

  addressWidth:{
    width: 1000,
    
  },

  gap:{
      gap: 40,
      left: 70,
  },

  address:{
    height: 100,
    marginBottom: -20
  },

  comp1:{
    top:150,
    left: 100,
  },
  comp2:{
    top:200,
    left: 100,
  },
  comp3:{
    top:250,
    left: 100,
  },
  comp4:{
    top:300,
    left: 100,
  },

  textInput:{
    backgroundColor: 'white',
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    fontSize: 20,
  },

  flexStyle:{
    marginTop: 11,
    top: 50,
    height: 40,
    width: 270,
  },
  container:{
    flex:1,
    left: 100,
    top:150,
    height: "auto",
    backgroundColor: "white",
    alignItems: "flex-start",
    alignSelf: "auto",

    
  },


  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  textHolderViewStyle:{
    height: 10,
    width: 260,
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 127,
    marginLeft:100,
    gap: 17,
  },
  textHolderStyle:{
    
    backgroundColor: 'transparent',
    

  },
  kaytLayout: {
    left: 35,
    height: 51,
    width: 320,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  kaytChildLayout: {
    height: 52,
    width: 322,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  ifreFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  simTypo: {
    left: 96,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout2: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  iconLayout1: {
    height: 26,
    width: 23,
    left: 52,
    position: "absolute",
  },
  grYapTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  iconLayout: {
    height: 38,
    width: 38,
    left: 52,
    position: "absolute",
  },
  kaytOlEkranChild: {
    top: 253,
    height: 51,
    width: 320,
    borderRadius: Border.br_xl,
    left: 36,
    position: "absolute",
  },
  kaytOlEkranItem: {
    top: 369,
    left: 37,
    height: 108,
    width: 320,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  kaytOlEkranInner: {
    top: 543,
  },
  rectangleIcon: {
    top: 311,
  },
  kaytOlEkranChild1: {
    marginLeft: -160.5,
    top: 194,
    left: "50%",
  },
  kaytOlEkranChild2: {
    top: 135,
    left: 36,
    height: 52,
    width: 322,
  },
  kaytOlEkranChild3: {
    top: 485,
  },
  ePosta: {
    top: 270,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 95,
    color: Color.black,
    position: "absolute",
  },
  telefonNumaras: {
    top: 328,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 95,
    color: Color.black,
    position: "absolute",
  },
  soyisim: {
    top: 215,
  },
  sim: {
    top: 153,
  },
  image7Icon: {
    top: 260,
    left: 47,
  },
  image50Icon: {
    top: 318,
    left: 48,
  },
  ifreTekrar: {
    top: 560,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 95,
    color: Color.black,
    position: "absolute",
  },
  ifre: {
    top: 499,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 95,
    color: Color.black,
    position: "absolute",
  },
  image8Icon: {
    top: 556,
  },
  image9Icon: {
    top: 499,
  },
  rectangleView: {
    top: 730,
    right: 35,
    left: 50,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.peru,
    height: 49,
    position: "absolute",
  },
  kayitOl: {
    top: 744,
    left: 160,
    textAlign: "left",
    color: Color.black,
  },
  grYap: {
    top: 754,
    left: 154,
    color: Color.peru,
    textAlign: "center",
  },
  image38Icon: {
    top: 25,
    left: 106,
    width: 181,
    height: 90,
    position: "absolute",
  },
  image48Icon: {
    top: 142,
  },
  image49Icon: {
    top: 204,
  },
  adres: {
    top: 381,
    width: 245,
    height: 79,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 95,
    color: Color.black,
    position: "absolute",
  },
  image54Icon: {
    top: 379,
    left: 56,
    width: 27,
    height: 25,
    position: "absolute",
  },
  kaytOlEkran: {
    backgroundColor: Color.brown_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default KayitOlEkran;

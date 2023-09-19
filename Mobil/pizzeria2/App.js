const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GirisEkrani from "./screens/GirisEkrani";
import FrameScreen from "./screens/FrameScreen";
import FrameScreen1 from "./screens/FrameScreen1";
import OdemeBolumu from "./screens/OdemeBolumu";
import UrunInceleme from "./screens/UrunInceleme";
import Image37Icon from "./components/Image37Icon";
import Image37Icon1 from "./components/Image37Icon1";
import Sepetim from "./screens/Sepetim";
import RectangleScreen from "./components/RectangleScreen";
import RectangleScreen1 from "./components/RectangleScreen1";
import Icecekler from "./screens/Icecekler";
import Pizzalar from "./screens/Pizzalar";
import NihaiInV34 from "./components/NihaiInV34";
import NihaiInV32 from "./components/NihaiInV32";
import NihaiInV31 from "./components/NihaiInV31";
import KayitOlEkran from "./screens/KayitOlEkran";
import AdresEkleme from "./screens/AdresEkleme";
import Menu from "./components/Menu";
import Adreslerim from "./screens/Adreslerim";
import Menu1 from "./components/Menu1";
import Siparislerim from "./screens/Siparislerim";
import Profilim from "./screens/Profilim";
import Anamenu from "./screens/Anamenu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="GirisEkrani"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="GirisEkrani"
              component={GirisEkrani}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame13"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={FrameScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OdemeBolumu"
              component={OdemeBolumu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UrunInceleme"
              component={UrunInceleme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sepetim"
              component={Sepetim}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Icecekler"
              component={Icecekler}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pizzalar"
              component={Pizzalar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KayitOlEkran"
              component={KayitOlEkran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdresEkleme"
              component={AdresEkleme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Adreslerim"
              component={Adreslerim}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Siparislerim"
              component={Siparislerim}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profilim"
              component={Profilim}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Anamenu"
              component={Anamenu}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

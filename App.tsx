import "react-native-gesture-handler";
import AppLoading from "expo-app-loading"; //used to hold splash screen while fonts are being loaded.
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Routes } from "./src/routes";
import { SafeAreaView, Text } from "react-native";
import { Footer } from "./src/components/Footer";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
      <Footer />
    </SafeAreaView>
  );
}

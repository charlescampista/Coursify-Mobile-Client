import { Text, View, Image } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";

import logo from "../../../assets/logo.png";

export function TopBar() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode="contain" />
      <Text style={styles.description}>
        Tefkdasjfkdçasjfkalsçdfjdakslçfjdaskljçf
      </Text>
    </View>
  );
}

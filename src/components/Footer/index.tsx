import { Text, View, Image } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";
import * as Linking from "expo-linking";
import coursifyWhiteLogo from "../../../assets/logo-coursify-w.png";

export function Footer() {
  function handleButtonClick() {
    Linking.openURL("https://coursify.me/");
  }

  return (
    <View style={styles.container}>
      <Image
        source={coursifyWhiteLogo}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          O Coursify.me é uma plataforma de ensino a distância,onde qualquer
          pessoa ou empresa pode construir seuEAD e vender cursos pela internet.
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Quero conhecer a plataforma!"
          handleClick={handleButtonClick}
        />
      </View>
    </View>
  );
}

import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 64,
    backgroundColor: theme.colors.white,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textContainer: {
    width: 290,
    height: 99,
  },
  description: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.buttonText,
    fontSize: 12,
    textAlign: "center",
  },
  image: {
    height: 50,
    width: 169,
  },
  button: {
    marginBottom: 24,
  },
});

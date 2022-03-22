import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "auto",
    backgroundColor: theme.colors.footerGreen,
    alignItems: "center",
    justifyContent: "space-between",
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
    height: 45,
    width: 172,
    marginVertical: 19,
  },
  button: {
    marginBottom: 24,
  },
});

import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 406,
    backgroundColor: theme.colors.darkText,
    flexDirection: "column",
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.buttonText,
    fontSize: 12,
    textAlign: "center",
  },
});

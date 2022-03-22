import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 216,
    height: 44,
    backgroundColor: theme.colors.buttonOrange,
    borderRadius: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.buttonText,
    fontSize: 12,
    textAlign: "center",
  },
});

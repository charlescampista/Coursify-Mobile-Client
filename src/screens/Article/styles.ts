import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.TextGreen,
    fontFamily: theme.fonts.listTitle,
    fontSize: 22,
    marginHorizontal: 15,
    textAlign: "left",
  },
  webView: {
    width: Dimensions.get("window").width * 1,
    height: 500,
  },
});

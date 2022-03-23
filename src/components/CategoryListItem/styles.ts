import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 1,
    height: 406,
    backgroundColor: theme.colors.white,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headContainer: {
    width: Dimensions.get("window").width * 1,
    flexDirection: "row",
  },
  title: {
    color: theme.colors.TextGreen,
    fontFamily: theme.fonts.listTitle,
    fontSize: 22,
    marginHorizontal: 15,
    textAlign: "left",
  },
  more: {
    //backgroundColor: theme.colors.buttonOrange,
    color: theme.colors.darkText,
    fontFamily: theme.fonts.readMore,
    fontSize: 17,
    marginHorizontal: 12,
    textAlign: "right",
  },
});

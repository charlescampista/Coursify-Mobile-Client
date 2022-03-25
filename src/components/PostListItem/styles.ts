import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 235,
    height: "auto",
    backgroundColor: theme.colors.white,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    margin: 15,
    shadowColor: theme.colors.cardShadow,
  },
  title: {
    color: theme.colors.TextGreen,
    fontFamily: theme.fonts.postCardTitle,
    fontSize: 17,
    textAlign: "justify",
  },
  description: {
    color: theme.colors.lightText,
    fontFamily: theme.fonts.postCardDescription,
    fontSize: 15,
    textAlign: "justify",
  },
  readMore: {
    color: theme.colors.textOrange,
    fontFamily: theme.fonts.readMore,
    fontSize: 16,
    textAlign: "left",
  },
  more: {
    color: theme.colors.darkText,
    fontFamily: theme.fonts.readMore,
    fontSize: 17,
    marginHorizontal: 12,
    textAlign: "right",
  },
  image: {
    height: 100,
    width: "100%",
    marginVertical: 19,
  },
});

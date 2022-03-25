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
});

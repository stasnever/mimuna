import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSize, footerHeight, APageButtonWidth } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const dynamicHeight = (height - firstViewFixedSize - footerHeight) * 0.5;

const styles = StyleSheet.create({
  titleLogo: {
    // position: "absolute",
    paddingBottom: dynamicHeight * 0.75,
    paddingLeft: width * 0.05,
    // color: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textPart1: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  },
  textPart2: {
    color: "white",
    fontSize: 17,
    borderColor: "black",
    paddingTop: 6,
    right: 2
  }
});

export default styles;

import { StyleSheet } from "react-native";
import { width, footerHeight, height, firstViewFixedSize } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const dynamicHeight = (height - firstViewFixedSize - footerHeight) * 0.5;

const styles = StyleSheet.create({
  footer: {
    width: width,
    height: footerHeight,
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    justifyContent: "center"
    // position: "relative",
    // overflow: "visible"
  },
  titleLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: -12
  },
  // borderColor: "red", borderWidth: 2
  titleLogo1: { justifyContent: "flex-start", paddingLeft: 20 },
  titleLogo2: { justifyContent: "center" },
  titleLogo3: { justifyContent: "flex-end", paddingRight: 20 },
  textPart1: {
    color: colors.purple,
    fontSize: 25,
    fontWeight: "bold"
  },
  textPart2: {
    color: colors.purple,
    fontSize: 17,
    borderColor: "black",
    paddingTop: 8,
    right: 2
  },
  textMiddle: {
    color: colors.purple,
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default styles;

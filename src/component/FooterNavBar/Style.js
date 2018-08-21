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
    justifyContent: "space-between",
    top: 20
    // position: "relative"

    // position: "relative",
    // overflow: "visible"
  },
  footerDummy: {
    width: width,
    height: footerHeight + 20,
    backgroundColor: colors.navi,
    position: "relative"
  },
  titleLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
    // top: -12
  },
  // borderColor: "red", borderWidth: 2
  titleLogo1: { justifyContent: "flex-start", paddingLeft: 25 },
  titleLogo2: { justifyContent: "center", top: -12 },
  titleLogo3: { justifyContent: "flex-end", paddingRight: 25 },
  textPart1: {
    color: colors.purple,
    fontSize: 25,
    fontWeight: "900"
  },
  textPart2: {
    color: colors.purple,
    fontSize: 16,
    borderColor: "black",
    paddingTop: 7
  },
  textMiddle: {
    color: colors.purple,
    fontSize: 42,
    fontWeight: "900"
  }
});

export default styles;

import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSizePageB, footerHeight, APageButtonWidth } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import { calcSizeFont } from "../../utils/utilities";

const dynamicHeight = (height - firstViewFixedSizePageB - footerHeight) * 0.5;
console.log("dem", height, firstViewFixedSizePageB, footerHeight, dynamicHeight, dynamicHeight * 2 + firstViewFixedSizePageB + footerHeight);
const styles = StyleSheet.create({
  dynamicView: {
    backgroundColor: colors.lightBlue,
    borderColor: "black",
    flexDirection: "column",
    height: dynamicHeight,
    width: width,
    justifyContent: "flex-start",
    position: "relative"
  },
  dynamicView2: {
    backgroundColor: colors.navi,
    borderColor: "black",
    flexDirection: "column",
    height: dynamicHeight,
    width: width,
    justifyContent: "center",
    position: "relative"
  },
  container: {
    backgroundColor: colors.navi,
    borderColor: "black",
    flexDirection: "column",
    height: dynamicHeight,
    width: width
  },
  titleLogo: {
    paddingTop: 0,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textPart1: {
    color: "white",
    fontSize: calcSizeFont(25),
    fontWeight: "900"
  },
  textPart2: {
    color: "white",
    fontSize: calcSizeFont(16),
    borderColor: "black",
    paddingTop: 7
  },
  buttonStyle: {
    backgroundColor: "white",
    width: APageButtonWidth,
    height: (34 / 144) * dynamicHeight,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 90,
    justifyContent: "center"
  },
  titleStyle: {
    fontWeight: "bold",
    color: colors.purple
  },
  containerStyle: {
    borderColor: "black",
    borderWidth: 0,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  payWrapper: {
    flex: 1,
    alignItems: "center"
  },
  mainText: {
    color: "white",
    fontSize: calcSizeFont(16),
    fontWeight: "600"
    // marginTop: 10
  },
  DoubleArrow: {
    paddingTop: 9,
    paddingLeft: -15
  }
});

export default styles;

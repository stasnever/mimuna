import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSizePageB, footerHeight, APageButtonWidth } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import { black } from "kleur";

const dynamicHeight = (height - firstViewFixedSizePageB - footerHeight) * 0.5;
console.log("dem", height, firstViewFixedSizePageB, footerHeight, dynamicHeight, dynamicHeight * 2 + firstViewFixedSizePageB + footerHeight);
const styles = StyleSheet.create({
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
    // position: "absolute",
    top: 0,
    paddingLeft: 15,
    paddingTop: 10,
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
    paddingTop: 6
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
    borderColor: "red",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15
  },
  payWrapper2: {
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
    alignItems: "center"
  },
  mainText: {
    paddingTop: 25
  },
  br: {
    height: 1,
    borderColor: "black",
    borderWidth: 1
  },
  calendarTexts: {
    paddingRight: 15
  },
  text: {
    color: "white"
  },
  amountNum: {
    fontSize: 35,
    fontWeight: "600"
  }
});

export default styles;

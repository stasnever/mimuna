import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSize, footerHeight, APageButtonWidth } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const dynamicHeight = (height - firstViewFixedSize - footerHeight) * 0.5;

const styles = StyleSheet.create({
  dynamicView: {
    backgroundColor: colors.lightBlue,
    borderColor: "black",
    flexDirection: "column",
    height: dynamicHeight,
    width: width,
    justifyContent: "center"
  },
  dynamicView2: {
    backgroundColor: colors.navi,
    borderColor: "black",
    flexDirection: "column",
    height: dynamicHeight,
    width: width,
    justifyContent: "center"
  },
  container: {
    backgroundColor: colors.navi,
    borderColor: "black",
    flexDirection: "column",
    height: dynamicHeight,
    width: width
  },
  titleLogo: {
    position: "absolute",
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
  mainText: {
    paddingTop: 10,
    color: "white",
    textAlign: "center",
    width: width * 0.8
  },
  mainText2: {
    top: -4,
    color: "white",
    textAlign: "center",
    width: width * 0.8,
    marginBottom: 5
  }
});

export default styles;

import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSize, footerHeight, APageButtonWidth, APageButtonHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const dynamicHeight = (height - firstViewFixedSize - footerHeight) * 0.5;

const styles = StyleSheet.create({
  dynamicView: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    borderColor: "black",
    flexDirection: "column",
    width: width,
    justifyContent: "flex-start"
  },
  dynamicView2: {
    flex: 1,
    backgroundColor: colors.navi,
    borderColor: "black",
    flexDirection: "column",
    width: width,
    justifyContent: "flex-start"
  },
  container: {
    backgroundColor: colors.navi,
    borderColor: "black",
    flexDirection: "column",
    height: dynamicHeight,
    width: width
  },
  titleLogo: {
    paddingTop: 9,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 29
  },
  textPart1: {
    color: "white",
    fontSize: 25,
    fontWeight: "900"
  },
  textPart2: {
    color: "white",
    fontSize: 16,
    borderColor: "black",
    paddingTop: 7
  },
  buttonStyle: {
    backgroundColor: "white",
    width: APageButtonWidth,
    height: APageButtonHeight,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 90,
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 22,
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
    paddingTop: 3,
    color: "white",
    textAlign: "center",
    width: width * 0.6,
    fontSize: 16,
    fontWeight: "900"
  },
  mainText2: {
    top: -4,
    color: "white",
    textAlign: "center",
    width: width * 0.8,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "900"
  }
});

export default styles;

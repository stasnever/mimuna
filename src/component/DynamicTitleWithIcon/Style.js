import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSize, footerHeight, APageButtonWidth, firstViewFixedSizePageB } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const dynamicHeight = (height - firstViewFixedSizePageB - footerHeight) * 0.5;

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
  },
  headerWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "red",
    borderWidth: 2,
    marginBottom: 25
  },
  arrowStyle: {}
});

export default styles;

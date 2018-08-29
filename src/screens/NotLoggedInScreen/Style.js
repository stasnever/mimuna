import { StyleSheet } from "react-native";
import { firstViewFixedSize, width, circleImageRadius } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import { calcSizeFont } from "../../utils/utilities";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  firstView: {
    flexDirection: "column",
    backgroundColor: colors.lightGrey,
    width: width,
    height: firstViewFixedSize,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeText: {
    color: colors.purple,
    fontSize: calcSizeFont(28),
    fontWeight: "bold",
    marginBottom: 2
  },
  mainText: {
    color: colors.purple,
    textAlign: "center",
    width: 330,
    fontSize: calcSizeFont(16)
  },
  mainText2: {
    flexDirection: "row",
    top: 2
  },
  mainText3: {
    color: colors.purple,
    textAlign: "center",
    width: 330,
    fontSize: calcSizeFont(16),
    top: 170,
    zIndex: 3,
    backgroundColor: "transparent",
    position: "absolute"
  },
  twoPartText1: {
    color: colors.purple,
    fontSize: calcSizeFont(14),
    fontWeight: "900",
    top: 2
  },
  twoPartText2: {
    fontSize: calcSizeFont(16),
    color: colors.purple
  },
  arrowCircle: {
    width: circleImageRadius,
    height: circleImageRadius,
    borderRadius: circleImageRadius / 2,
    backgroundColor: colors.lightGrey,
    position: "absolute",
    top: 170,
    zIndex: 1
  },
  image: {},
  singleBoldWord: {
    fontWeight: "bold"
  }
});

export default styles;

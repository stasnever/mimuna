import { StyleSheet } from "react-native";
import { firstViewFixedSize, width, circleImageRadius, firstViewFixedSizePageB } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import { calcSizeFont } from "../../utils/utilities";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width
  },
  firstView: {
    flexDirection: "column",
    backgroundColor: colors.lightGrey,
    width: width,
    height: firstViewFixedSizePageB,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  userWrapper: {
    alignContent: "center",
    alignItems: "center",
    top: 8
  },
  name: {
    color: colors.purple,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: calcSizeFont(16),
    paddingTop: 9
  },
  arrowCircle: {
    width: circleImageRadius,
    height: circleImageRadius,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: colors.lightGrey,
    position: "absolute",
    top: firstViewFixedSize * 0.82
  }
});

export default styles;

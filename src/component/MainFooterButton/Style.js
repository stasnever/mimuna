import { StyleSheet } from "react-native";
import { circleImageRadius, width } from "../../utils/Consts";
import { colors } from "../../utils/Color";
const styles = StyleSheet.create({
  circle: {
    width: 116,
    height: 116,
    top: -48,
    left: width / 2 - 116 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    borderColor: "#dddddd",
    borderWidth: 1,
    position: "relative"
  },
  circle2: {
    width: 105,
    height: 105,
    top: 3,
    right: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    borderColor: colors.purple,
    borderWidth: 1,
    position: "absolute",
    zIndex: 3
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
  }
});

export default styles;

import { StyleSheet } from "react-native";
import { firstViewFixedSize, width, circleImageRadius } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    width: width
  },
  firstView: {
    flexDirection: "column",
    backgroundColor: colors.lightGrey,
    width: width,
    height: firstViewFixedSize,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    position: "relative"
  },
  welcomeText: {
    color: colors.purple,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  mainText: {
    color: colors.purple,
    textAlign: "center",
    width: width * 0.8,
    marginBottom: 5
  },
  mainText3: {
    color: colors.purple,
    textAlign: "center",
    width: width * 0.8,
    marginBottom: 5
  },
  arrowCircle: {
    width: circleImageRadius,
    height: circleImageRadius,
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: circleImageRadius / 2,
    backgroundColor: "black",
    // position: "relative",
    top: 14
  }
});

export default styles;

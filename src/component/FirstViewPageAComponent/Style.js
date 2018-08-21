import { StyleSheet } from "react-native";
import { firstViewFixedSize, width, circleImageRadius } from "../../utils/Consts";
import { colors } from "../../utils/Color";

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
    alignItems: "center",
    paddingBottom: 20
  },
  welcomeText: {
    color: colors.purple,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 2
  },
  mainText: {
    color: colors.purple,
    textAlign: "center",
    width: 330,
    fontSize: 16
  },
  mainText2: {
    flexDirection: "row",
    top: 2
  },
  mainText3: {
    color: colors.purple,
    textAlign: "center",
    width: 330,
    fontSize: 16,
    top: 6
  },
  twoPartText1: {
    color: colors.purple,
    fontSize: 14,
    fontWeight: "900",
    top: 2
  },
  twoPartText2: {
    fontSize: 16,
    color: colors.purple
  },
  singleBoldWord: {
    fontWeight: "bold"
  },
  image: {
    marginBottom: 3
  }
});

export default styles;

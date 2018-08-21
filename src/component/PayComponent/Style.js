import { StyleSheet } from "react-native";
import { circleImageRadius, width, payComponentHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const styles = StyleSheet.create({
  Container: {
    width: width - 10,
    height: payComponentHeight,
    backgroundColor: colors.lightGrey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circleImage: {
    width: circleImageRadius,
    height: circleImageRadius,
    borderRadius: circleImageRadius / 2
  },
  picTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 7
  },
  picText1: {
    fontSize: 28,
    color: colors.purple,
    top: 3
  },
  TextWrapper: {
    alignItems: "flex-end",
    paddingRight: 7
  },
  picText2: {
    fontSize: 15,
    color: colors.purple,
    top: -6
  },
  picText3: {
    fontSize: 16,
    color: colors.purple
  },
  iconText: {
    top: -5,
    justifyContent: "center"
    // flexDirection: "row"
    // alignItems: "center"
  },
  iconTextWrap: {
    alignContent: "flex-end"
  },
  icon: {},
  cost: {
    fontSize: 22,
    color: colors.purple,
    top: 3
  },
  shekel: {
    fontSize: 15,
    color: colors.purple
  },
  costIcon: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10
  },
  leftWrap: {
    justifyContent: "space-between",
    paddingLeft: 10
  },
  date: { color: colors.purple, paddingBottom: 10 }
});

export default styles;

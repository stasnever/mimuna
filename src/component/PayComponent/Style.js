import { StyleSheet } from "react-native";
import { circleImageRadius, width, payComponentHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const deleteCircle = circleImageRadius * 0.55;
const styles = StyleSheet.create({
  Container: {
    width: width - 10,
    height: payComponentHeight,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  ContainerDummy: {
    width: width - 10,
    height: payComponentHeight + 20,
    backgroundColor: "transparent"
  },
  minus: { color: colors.lightRed, backgroundColor: "transparent", paddingLeft: 6, paddingTop: 5, fontSize: 10 },
  circle: {
    width: deleteCircle,
    height: deleteCircle,
    borderRadius: deleteCircle / 2,
    backgroundColor: "white",
    borderColor: colors.lightRed,
    borderWidth: 1,
    position: "absolute",
    top: 9,
    left: 10
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
    // justifyContent: "center"
    flexDirection: "row",
    alignContent: "center"
  },
  iconTextWrap: {
    alignContent: "flex-end"
  },
  icon: { top: 0, alignItems: "center", paddingRight: 3 },
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

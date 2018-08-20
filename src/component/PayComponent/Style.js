import { StyleSheet } from "react-native";
import { circleImageRadius, width, payComponentHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const styles = StyleSheet.create({
  Container: {
    width: width - 10,
    height: payComponentHeight,
    backgroundColor: colors.lightGrey,
    borderBottomColor: "green",
    borderWidth: 2,
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
    alignItems: "center"
  }
});

export default styles;

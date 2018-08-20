import { StyleSheet } from "react-native";
import { circleImageRadius, width, payComponentHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column"
  },
  textsWrap: {
    flexDirection: "row",
    borderBottomColor: "red",
    borderWidth: 2,
    justifyContent: "space-between"
  }
});

export default styles;

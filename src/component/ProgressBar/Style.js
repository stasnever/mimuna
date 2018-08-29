import { StyleSheet } from "react-native";
import { circleImageRadius, width, payComponentHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import { calcSizeFont } from "../../utils/utilities";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column"
  },
  textsWrap: {
    flexDirection: "row",
    borderBottomColor: "red",
    justifyContent: "space-between",
    paddingBottom: 7
  },
  text: {
    color: "white"
  },
  text1: { fontSize: calcSizeFont(16) },
  text2: { fontSize: calcSizeFont(22), fontWeight: "600" },
  text3: { fontSize: calcSizeFont(16) },
  date: { fontSize: calcSizeFont(22) }
});

export default styles;

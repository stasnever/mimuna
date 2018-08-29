import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSize, footerHeight, APageButtonWidth } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import { calcSizeFont } from "../../utils/utilities";

const dynamicHeight = (height - firstViewFixedSize - footerHeight) * 0.5;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    alignContent: "flex-start",
    width: 75,
    height: 75
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: calcSizeFont(28)
  },
  textWrap: {
    position: "absolute",
    top: 30,
    left: 20,
    backgroundColor: "transparent"
  }
});

export default styles;

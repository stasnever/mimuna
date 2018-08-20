import { StyleSheet } from "react-native";
import { width, height, firstViewFixedSize, footerHeight, APageButtonWidth } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const dynamicHeight = (height - firstViewFixedSize - footerHeight) * 0.5;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    width: 100,
    height: 100,
    borderBottomColor: "red",
    borderWidth: 2
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28
  },
  textWrap: {
    position: "absolute",
    top: 40,
    left: 30
  }
});

export default styles;

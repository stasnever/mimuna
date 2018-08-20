import { StyleSheet } from "react-native";
import { circleImageRadius } from "../../utils/Consts";
const styles = StyleSheet.create({
  circleImage: {
    width: circleImageRadius,
    height: circleImageRadius,
    borderRadius: circleImageRadius / 2
  }
});

export default styles;

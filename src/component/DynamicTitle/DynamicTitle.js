import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import { Button } from "react-native-elements";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import { width, height, APageButtonWidth, firstViewFixedSize, footerHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";

const DynamicTitle = props => {
  return (
    <View style={[Style.viewStyle, props.viewStyle]}>
      {props.logoText1 && <Text style={[Style.textPart1, props.textStylePart1]}>{props.logoText1}</Text>}
      {props.logoText2 && <Text style={[Style.textPart2, props.textStylePart2]}>{props.logoText2}</Text>}
    </View>
  );
};

export default DynamicTitle;

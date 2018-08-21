import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import { Button } from "react-native-elements";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import { width, height, APageButtonWidth, firstViewFixedSize, footerHeight } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import DynamicTitle from "../DynamicTitle";

const dynamicHeight = (height - firstViewFixedSize - footerHeight) * 0.5;

const CustomView = props => {
  return (
    <View style={props.viewStyle == "firstView" ? Style.dynamicView : Style.dynamicView2}>
      <DynamicTitle viewStyle={Style.titleLogo} textStylePart1={Style.textPart1} textStylePart2={Style.textPart2} logoText1={props.logoText1} logoText2={props.logoText2} />
      <View style={{ alignItems: "center" }}>
        <Button title={props.buttonText} textStyle={Style.titleStyle} buttonStyle={Style.buttonStyle} containerViewStyle={Style.containerStyle} />
        <Text style={Style.mainText}>{props.mainText}</Text>
        {props.mainText2 && <Text style={Style.mainText2}>{props.mainText2}</Text>}
      </View>
    </View>
  );
};

export default CustomView;

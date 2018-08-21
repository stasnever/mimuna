import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import { Button } from "react-native-elements";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import { width, height, APageButtonWidth, firstViewFixedSize, footerHeight, TouchableHighlight } from "../../utils/Consts";
import { colors } from "../../utils/Color";
import Icon from "react-native-vector-icons/FontAwesome";

const DynamicTitle = props => {
  return (
    <View style={props.anotherOpt ? Style.headerWrap2 : Style.headerWrap}>
      <View style={[Style.viewStyle, props.viewStyle]}>
        {props.logoText1 && <Text style={[Style.textPart1, props.textStylePart1]}>{props.logoText1}</Text>}
        {props.logoText2 && <Text style={[Style.textPart2, props.textStylePart2]}>{props.logoText2}</Text>}
      </View>
      <View style={Style.arrowStyle}>
        <Text>
          <Icon name="angle-double-right" size={45} color={props.color} />
        </Text>
      </View>
    </View>
  );
};

export default DynamicTitle;

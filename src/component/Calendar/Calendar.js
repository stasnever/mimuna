import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import { colors } from "../../utils/Color";
import Icon from "react-native-vector-icons/Entypo";

const CustomView = props => {
  return (
    <View style={Style.container}>
      <Text>
        <Icon name="calendar" size={70} color="white" />
      </Text>
      <View style={Style.textWrap}>
        <Text style={Style.text}>15</Text>
      </View>
    </View>
  );
};

export default CustomView;

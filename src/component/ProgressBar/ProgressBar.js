import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import { colors } from "../../utils/Color";
import { Bar } from "react-native-progress";
import { width } from "../../utils/Consts";

const ProgressBar = props => {
  return (
    <View>
      <View style={Style.container}>
        <View style={Style.textsWrap}>
          <Text>aaaaaaaa</Text>
          <Text>bbbbbbbb</Text>
        </View>
        <Bar progress={0.3} width={width - 10} />
      </View>
    </View>
  );
};

export default ProgressBar;

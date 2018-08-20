import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Style from "./Style";

const Images = props => {
  return (
    <View>
      <Image source={{ uri: props.src }} style={[Style.circleImage, props.style]} />
    </View>
  );
};

export default Images;

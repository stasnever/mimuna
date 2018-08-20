import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Style from "./Style";
import { texts } from "../../utils/Texts";

const PayComponent = props => {
  console.log("now", props);
  return (
    <View style={Style.Container}>
      <View>
        <Text>{"150"}</Text>
        <Text>{"02.03.18"}</Text>
      </View>
      <View style={Style.picTextWrapper}>
        <View>
          <Text>{texts.not_logged_in_page_welcome_text}</Text>
          <Text>{texts.not_logged_in_page_welcome_text}</Text>
          <Text>{texts.not_logged_in_page_welcome_text}</Text>
        </View>
        <Image source={{ uri: props.src }} style={[Style.circleImage, props.style]} />
      </View>
    </View>
  );
};

export default PayComponent;

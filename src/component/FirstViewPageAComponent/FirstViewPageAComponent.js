import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Images, CustomView, FooterNavBar } from "../../component";
import { texts } from "../../utils/Texts";
import Style from "./Style";

const FirstViewPageAComponent = props => {
  return (
    <View style={Style.firstView}>
      <View style={Style.image}>
        <Images src={"https://via.placeholder.com/150x150"} />
      </View>
      <Text style={Style.welcomeText}>{texts.not_logged_in_page_welcome_text}</Text>
      <View style={Style.mainText2}>
        <Text style={Style.twoPartText2}>{texts.not_logged_in_page_main_text_1}</Text>
        <Text style={Style.twoPartText1}> {texts.not_logged_in_page_main_text_3}</Text>
      </View>
      <Text style={Style.mainText}>
        <Text>{texts.not_logged_in_page_main_text_2}</Text>
      </Text>
    </View>
  );
};

export default FirstViewPageAComponent;

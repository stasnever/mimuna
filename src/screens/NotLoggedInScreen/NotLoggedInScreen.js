import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Images, CustomView, FooterNavBar } from "../../component";
import { texts } from "../../utils/Texts";
import Style from "./Style";

class NotLoggedInScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.firstView}>
          <Images src={"https://via.placeholder.com/150x150"} />
          <Text style={Style.welcomeText}>{texts.not_logged_in_page_welcome_text}</Text>
          <Text style={Style.mainText}>{texts.not_logged_in_page_main_text_1}</Text>
          <Text style={Style.mainText3}>{texts.not_logged_in_page_main_text_3}</Text>
          <View style={Style.arrowCircle} />
        </View>
        <CustomView
          viewStyle={"firstView"}
          logoText1={texts.not_logged_in_page_my_play_header_text_1}
          logoText2={texts.not_logged_in_page_my_play_header_text_2}
          buttonText={texts.not_logged_in_page_my_play_button_text}
          mainText={texts.not_logged_in_page_my_play_main_text}
          mainText2={texts.not_logged_in_page_my_play_main_text2}
        />
        <CustomView
          viewStyle={"secondView"}
          logoText1={texts.not_logged_in_page_my_credit_header_text_1}
          logoText2={texts.not_logged_in_page_my_credit_header_text_2}
          buttonText={texts.not_logged_in_page_my_credit_button_text}
          mainText={texts.not_logged_in_page_my_credit_main_text}
        />
        <FooterNavBar navigation={this.props.navigation} />
      </View>
    );
  }
}
export default NotLoggedInScreen;

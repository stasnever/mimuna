import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Images, CustomView, FooterNavBar, CustomViewMyCred, CustomViewMypay } from "../../component";
import { texts } from "../../utils/Texts";
import Style from "./Style";
import { fname, lname } from "../../utils/Consts";
import { observer, inject } from "mobx-react/native";

@inject("AppStore")
@observer
class LoggedInScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("all Props", this.props);
    return (
      <View style={Style.container}>
        <View style={Style.firstView}>
          <View style={Style.userWrapper}>
            <Images src={`https://randomuser.me/api/portraits/med/men/64.jpg`} />
            <Text style={Style.name}>{fname + " " + lname}</Text>
          </View>
        </View>
        <CustomViewMypay
          logoText1={texts.not_logged_in_page_my_play_header_text_1}
          logoText2={texts.not_logged_in_page_my_play_header_text_2}
          buttonText={texts.not_logged_in_page_my_play_button_text}
          mainText={texts.not_logged_in_page_my_play_main_text}
          mainText2={texts.not_logged_in_page_my_play_main_text2}
        />
        <CustomViewMyCred
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
export default LoggedInScreen;

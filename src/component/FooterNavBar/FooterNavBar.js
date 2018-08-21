import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import Style from "./Style";
import DynamicTitle from "../DynamicTitle";
import { texts } from "../../utils/Texts";
import MainFooterButton from "../MainFooterButton";
import { observer, inject } from "mobx-react/native";

@inject("AppStore")
@observer
class FooterNavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={Style.footer}>
        <TouchableOpacity
          style={Style.myPay}
          onPress={() => {
            this.props.AppStore.addToCredit(50);
            this.props.AppStore.addPayment();
          }}
        >
          <DynamicTitle
            viewStyle={[Style.titleLogo, Style.titleLogo1]}
            textStylePart1={Style.textPart1}
            textStylePart2={Style.textPart2}
            logoText1={texts.not_logged_in_page_my_credit_header_text_1}
            logoText2={texts.not_logged_in_page_my_credit_header_text_2}
          />
        </TouchableOpacity>
        <MainFooterButton
          style={Style.button}
          navigation={this.props.navigation}
          viewStyle={[Style.titleLogo, Style.titleLogo2]}
          textStylePart1={Style.textMiddle}
          logoText1={texts.not_logged_in_page_my_credit_middle_footer_text}
          addPay={this.props.AppStore.addMorePays}
        />
        <TouchableOpacity
          style={Style.myCred}
          onPress={() => {
            this.props.AppStore.addMorePays();
          }}
        >
          <DynamicTitle
            viewStyle={[Style.titleLogo, Style.titleLogo3]}
            textStylePart1={Style.textPart1}
            textStylePart2={Style.textPart2}
            logoText1={texts.not_logged_in_page_my_play_header_text_1}
            logoText2={texts.not_logged_in_page_my_play_header_text_2}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default FooterNavBar;

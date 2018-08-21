import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Images, CustomView, FooterNavBar, FirstViewPageAComponent } from "../../component";
import { texts } from "../../utils/Texts";
import Style from "./Style";
import { colors } from "../../utils/Color";
import Icon from "react-native-vector-icons/FontAwesome";

class NotLoggedInScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Style.container}>
        <FirstViewPageAComponent />
        <View style={Style.arrowCircle}>
          <Icon style={{ position: "absolute", backgroundColor: "transparent", top: 20, left: 15 }} name="angle-double-down" size={40} color={colors.lightRed} />
        </View>
        <Text style={Style.mainText3}>{texts.not_logged_in_page_main_text_4}</Text>
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

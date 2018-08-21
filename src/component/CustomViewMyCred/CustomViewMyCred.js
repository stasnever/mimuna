import React, { Component } from "react";
import { Image, View, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import DynamicTitle from "../DynamicTitle";
import { DynamicTitleWithIcon, Calendar, ProgressBar } from "..";
import PayComponent from "../PayComponent";
import { colors } from "../../utils/Color";
import { observer, inject } from "mobx-react/native";

@inject("AppStore")
@observer
class CustomViewMypay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = item => {
    return <PayComponent src={item.item.src} />;
  };

  render() {
    return (
      <View style={Style.dynamicView2}>
        <DynamicTitleWithIcon
          color={colors.lightBlue}
          viewStyle={Style.titleLogo}
          textStylePart1={Style.textPart1}
          textStylePart2={Style.textPart2}
          logoText1={this.props.logoText1}
          logoText2={this.props.logoText2}
          anotherOpt={true}
        />
        <View style={Style.payWrapper}>
          <View style={Style.calendarTexts}>
            <Text style={[Style.text, Style.upperText]}>{texts.logged_in_page_my_credit_main_text}</Text>

            <Text style={[Style.text, Style.amountNum]}>
              <Text style={[Style.text, Style.shekel]}>₪ </Text>
              {this.props.AppStore.credit}
            </Text>
          </View>
          <Calendar />
        </View>
        <View style={Style.payWrapper2}>
          <ProgressBar />
          <Text style={Style.mainText}>{texts.logged_in_page_my_credit_payment_loan_info}</Text>
        </View>
      </View>
    );
  }
}

export default CustomViewMypay;

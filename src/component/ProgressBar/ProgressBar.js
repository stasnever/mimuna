import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import { colors } from "../../utils/Color";
import { Bar } from "react-native-progress";
import { width } from "../../utils/Consts";
import moment from "moment";
import { observer, inject } from "mobx-react/native";

@inject("AppStore")
@observer
class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  progressBarFiller(payment) {
    return (payment * (100 / 36)) / 100;
  }

  render() {
    const { payment } = this.props.AppStore;

    return (
      <View>
        <View style={Style.container}>
          <View style={Style.textsWrap}>
            <Text style={[Style.text, Style.date]}> {moment().format("DD.MM.YYYY")}</Text>
            <Text>
              <Text style={[Style.text, Style.text1]}>{texts.logged_in_page_my_credit_payment}</Text>
              <Text style={[Style.text, Style.text2]}> {payment} </Text>
              <Text style={[Style.text, Style.text3]}>{texts.logged_in_page_my_credit_payment_from}</Text>
            </Text>
          </View>
          <Bar progress={this.progressBarFiller(payment)} style={{ borderWidth: 1.5 }} color={colors.lightRed} borderColor="white" width={width - 10} />
        </View>
      </View>
    );
  }
}

export default ProgressBar;

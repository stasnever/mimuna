import React, { Component } from "react";
import { Image, View, Text, Button, TouchableOpacity } from "react-native";
import Style from "./Style";
import DynamicTitle from "../DynamicTitle";
import { texts } from "../../utils/Texts";
import { renderReporter } from "mobx-react/native";
import { observer, inject } from "mobx-react/native";

@inject("AppStore")
@observer
class MainFooterButton extends Component {
  constructor(props) {
    super(props);
  }

  navigateToNextComponent() {
    return this.props.navigation.state.routeName == "NotLoggedIn" ? "LoggedIn" : "NotLoggedIn";
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.navigateToNextComponent() == "LoggedIn" ? this.props.AppStore.addMorePays() : null;
          this.props.navigation.navigate(this.navigateToNextComponent());
        }}
        style={Style.circle}
      >
        <View style={Style.circle2}>
          <DynamicTitle
            viewStyle={[this.props.titleLogo, this.props.viewStyle]}
            textStylePart1={this.props.textStylePart1}
            textStylePart2={this.props.textStylePart2}
            logoText1={this.props.logoText1}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default MainFooterButton;

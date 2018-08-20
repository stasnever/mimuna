import React, { Component } from "react";
import { Image, View, Text, FlatList, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import DynamicTitle from "../DynamicTitle";
import { DynamicTitleWithIcon } from "..";
import PayComponent from "../PayComponent";
import { colors } from "../../utils/Color";
import { observer, inject } from "mobx-react/native";

@inject("AppStore")
@observer
class CustomViewMypay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  renderItem = item => {
    console.log("item", item);
    return <PayComponent src={item.item.src} />;
  };

  render() {
    return (
      <View style={Style.dynamicView}>
        {console.log("1234567890-1234567890-", this.props.AppStore.dataList)}
        <DynamicTitleWithIcon
          color={colors.turquoise}
          viewStyle={Style.titleLogo}
          textStylePart1={Style.textPart1}
          textStylePart2={Style.textPart2}
          logoText1={this.props.logoText1}
          logoText2={this.props.logoText2}
        />
        <View style={Style.payWrapper}>
          {!!this.props.AppStore.dataList.length && (
            <FlatList
              vertical
              disableVirtualization={false}
              data={this.props.AppStore.dataList}
              renderItem={this.renderItem}
              extraData={this.props.AppStore.dataList}
              ListFooterComponent={() => {
                return <View style={{ backgroundColor: "transparent", height: 1 }} />;
              }}
            />
          )}
        </View>
      </View>
    );
  }
}

export default CustomViewMypay;

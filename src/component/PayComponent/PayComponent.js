import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Style from "./Style";
import { texts } from "../../utils/Texts";
import { payFName, payLName, transCost, transDate, payFor, transSuccess } from "../../utils/Consts";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../utils/Color";

const PayComponent = props => {
  console.log("now", props);
  return (
    <View style={Style.ContainerDummy}>
      <View style={Style.Container}>
        <View style={Style.leftWrap}>
          <View style={Style.costIcon}>
            <Text>
              <Text style={Style.shekel}>₪</Text>
              <Text style={Style.cost}>{transCost}</Text>
            </Text>
          </View>
          <View>
            <Text style={Style.date}>{transDate}</Text>
          </View>
        </View>
        <View style={Style.picTextWrapper}>
          <View style={Style.TextWrapper}>
            <Text style={Style.picText1}>{payFName + " " + payLName}</Text>
            <Text style={Style.picText2}>{payFor}</Text>
            <View style={Style.iconText}>
              <View style={Style.icon}>
                <Icon name="check-circle" size={20} color={colors.turquoise} />
              </View>
              <Text style={Style.picText3}>{" " + transSuccess}</Text>
            </View>
          </View>
          <Image source={{ uri: props.src }} style={[Style.circleImage, props.style]} />
        </View>
      </View>
      <View style={Style.circle}>
        {/* <Icon name="minus" size={20} color={props.color} style={{ backgroundColor: "transparent", paddingLeft: 6, }} /> */}
        <Text style={Style.minus}>____</Text>
      </View>
    </View>
  );
};

export default PayComponent;

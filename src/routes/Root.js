import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import NotLoggedInScreen from "../screens/NotLoggedInScreen";
import LoggedInScreen from "../screens/LoggedInScreen";
import AppStore from "../stores";
import { observer, Provider } from "mobx-react/native";
const stores = { AppStore };

const AppNavigator = createStackNavigator({
  LoggedIn: {
    screen: LoggedInScreen,
    navigationOptions: {
      header: null
    }
  },
  NotLoggedIn: {
    screen: NotLoggedInScreen,
    navigationOptions: {
      header: null
    }
  }
});

class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

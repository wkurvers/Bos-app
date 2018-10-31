import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Api from "../config/api.js";
import { Toolbar } from "react-native-material-ui";
import SwipeCards from "./SwipeCard.js";

export default class One extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="One"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
          <SwipeCards style={{ flex: 1 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  }
});

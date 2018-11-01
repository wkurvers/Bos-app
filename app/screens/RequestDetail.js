import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";

export default class RequestDetail extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "");
    const owner = navigation.getParam("owner", "");
    const ownerId = navigation.getParam("ownerId", "");
    const title = navigation.getParam("title", "");
    const description = navigation.getParam("description", "");
    const necessity = navigation.getParam("necessity", "");
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Exchange"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
            <View>
                <Text>{title}</Text>
                <View>
                    <Text>
                        {description}
                    </Text>
                </View>
                <View>
                    <Text>
                        {necessity}
                    </Text>
                </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
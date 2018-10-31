import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Toolbar } from "react-native-material-ui";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Profile"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <Image
          style={{ height: 200, width: "100%" }}
          source={{
            uri:
              "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg"
          }}
        />

        <View
          style={{
            flexDirection: "column",
            height: 60,
            width: "100%",
            padding: 10,
            paddingLeft: 30
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bartel-Jaap</Text>
          <Text style={{ fontSize: 16 }}>IT Profesional</Text>
        </View>
        <View style={{ width: "100%", flexDirection: "column" }}>
          <View
            style={{
              height: 40,
              width: "100%",
              flexDirection: "row",
              paddingTop: 20
            }}
          >
            <Image
              source={require("../assets/Polygon.png")}
              style={{
                width: 15,
                height: 15,
                marginLeft: 75,
                marginRight: 20
              }}
            />
            <Text>Beschrijving</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 2,
                height: 145,
                backgroundColor: "#cfd8dc",
                marginLeft: 80,
                marginTop: 10
              }}
            />
            <Text style={{ margin: 20, width: 250 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              lacinia nibh. Pellentesque faucibus ante sed enim fringilla,
              accumsan malesuada elit mollis. Fusce posuere tincidunt quam sed
              consequat. Phasellus eu erat eu turpis mattis aliquet nec non
              ante.
            </Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "column" }}>
          <View
            style={{
              height: 40,
              width: "100%",
              flexDirection: "row",
              paddingTop: 20
            }}
          >
            <Image
              source={require("../assets/Polygon.png")}
              style={{
                width: 15,
                height: 15,
                marginLeft: 75,
                marginRight: 20
              }}
            />
            <Text>Projecten</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 2,
                height: 75,
                backgroundColor: "#cfd8dc",
                marginLeft: 80,
                marginTop: 10
              }}
            />
            <Text style={{ margin: 20, width: 250 }}>
              {"\u2022" +
                " Project 1 " +
                "\n" +
                "\u2022" +
                " Project 2" +
                "\n" +
                "\u2022" +
                " Project 3"}
            </Text>
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

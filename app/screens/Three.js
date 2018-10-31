import React, { Component } from "react";
import {
  Alert,
  Animated,
  Button,
  Dimensions,
  Divider,
  FlatList,
  Image,
  ImageBackground,
  ListView,
  RefreshControl,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import Api from "../config/api.js";
import { Toolbar } from "react-native-material-ui";
export default class Three extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      refreshing: false,
      sleeping: false,
      data: [
        {
          title: "cool project",
          image: "https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif",
          location: "Groningen",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
        },
        {
          title: "cool project",
          image: "https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif",
          location: "Groningen",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
        },
        {
          title: "cool project",
          image: "https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif",
          location: "Groningen",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
        },
        {
          title: "cool project",
          image: "https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif",
          location: "Groningen",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
        }
      ],
      slicedArray: [],
      fullArray: []
    };
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar centerElement="All projects" />
        <View>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.title}
            initialNumToRender={2}
            // windowSize={2}
            // maxToRenderPerBatch={4}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
            style={{ paddingTop: 10, marginBottom: 55 }}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <View style={styles.card} elevation={5}>
                  <View
                    style={{
                      backgroundColor: "rgba(52, 52, 52, 0,8)",
                      paddingBottom: 0,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10
                    }}
                  >
                    <TouchableHighlight onPress={() => {}}>
                      <ImageBackground
                        source={{ uri: item.image }}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 10 }}
                        style={{ width: "100%", height: 250 }}
                      >
                        <View
                          style={{
                            height: "38%",
                            width: "100%",
                            backgroundColor: "#00000080",
                            position: "absolute",
                            bottom: 0,
                            borderRadius: 10
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "column",
                              margin: 20,
                              marginTop: 7,
                              marginBottom: 40
                            }}
                          >
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 25,
                                color: "white"
                              }}
                            >
                              {item.title}
                            </Text>
                          </View>
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              marginBottom: 10
                            }}
                          >
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 15,
                                color: "#BDBDBD",
                                position: "absolute",
                                right: 10
                              }}
                            >
                              lees verder
                            </Text>
                          </View>
                        </View>
                      </ImageBackground>
                    </TouchableHighlight>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 0,
                        left: 0
                      }}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 15
  },

  card: {
    color: "rgba(52, 52, 52, 1.0)",
    margin: 10,
    marginBottom: 10,
    // android (Android +5.0)
    elevation: 3
  },
  loginButton: {
    margin: 5,
    backgroundColor: "#FF6700",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(52, 52, 52, 1.0)"
  }
});

import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";
import { NavigationActions } from "react-navigation";

export default class Exchange extends Component {
  constructor() {
    super();
    this.state = {"dataArray": []}
    ls = LocalStorage.getInstance();
    api = Api.getInstance();
    api.callApi("getAllNecessityRequests", "POST", {}, response => {
        console.log(response['response'])
        this.setState({
            dataArray: response['response']
        });
    });
  }

  componentWillMount() {
    api = Api.getInstance();
    api.callApi("getAllNecessityRequests", "POST", {}, response => {
        this.setState({
            dataArray: response['response']
        });
    });
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Exchange"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
          <FlatList
            data={this.state.dataArray}
            keyExtractor={item => "" + item.id}
            numColumns={2}
            renderItem={ ({item}) => (
                    <TouchableHighlight
                        onPress={() =>
                            this.props.navigation.navigate("RequestDetail",
                                    {
                                        id: item.id,
                                        owner: item.owner,
                                        ownerId: item.ownerId,
                                        title: item.title,
                                        description: item.description,
                                        necessity: item.necessity
                                    }
                                )
                        }
                    >
                        <View>
                            <Text>{item.title}</Text>
                            <Text>Door {item.owner}</Text>
                        </View>
                    </TouchableHighlight>
                )
            }
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
    alignItems: "center"
  }
});

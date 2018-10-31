import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";
import { GiftedChat } from "react-native-gifted-chat";

export default class Two extends Component {
  constructor() {
    super();
    this.state = { messages: [] };
  }

  componentDidMount() {
    fetch("http://gromdroid.nl/ide/workspace/bos/chat.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => this.setState({ messages: responseJson.reverse() }))
      .catch(error => {
        console.log(error);
      });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    console.log(this.state.messages);
  }
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Two"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
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

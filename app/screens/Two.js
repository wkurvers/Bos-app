import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";
import {
  GiftedChat,
  Actions,
  Bubble,
  SystemMessage
} from "react-native-gifted-chat";
export default class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require("../config/messages.js")
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSend(messages = []) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if (messages[0].image || messages[0].location || !this._isAlright) {
        this.setState(previousState => {
          return {
            typingText: "React Native is typing"
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        console.log(messages[0].text);
        console.log(messages[0].text.includes("project"));
        console.log(messages[0].text.includes("work"));
        if (messages.length > 0) {
          if (messages[0].text == "Hey!") {
            this.onReceive("Hi");
          } else if (
            messages[0].text.includes("project") &&
            messages[0].text.includes("work")
          ) {
            this.onReceive("That's great, please contact me on 0612345678");
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive("Alright");
            }
          }
        }
      }

      this.setState(previousState => {
        return {
          typingText: null
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native"
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          }
        })
      };
    });
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#f0f0f0"
          }
        }}
      />
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15
        }}
        textStyle={{
          fontSize: 14
        }}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 35,
                width: 35,
                borderRadius: 35,
                margin: 10,
                backgroundColor: "#2ecc71",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>RN</Text>
            </View>
            <View
              style={{
                borderRadius: 15,
                backgroundColor: "#f0f0f0",
                marginRight: 60,
                height: 40,
                width: 60,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>Typing</Text>
            </View>
          </View>
        </View>
      );
    }
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
          onSend={this.onSend}
          user={{
            _id: 1 // sent messages should have same user._id
          }}
          renderBubble={this.renderBubble}
          renderSystemMessage={this.renderSystemMessage}
          renderFooter={this.renderFooter}
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

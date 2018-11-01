"use strict";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Api from "../config/api.js";

import SwipeCards from "../config/SwipeCardModule.js";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={{ uri: this.props.thumbnail }}
        />
        <Text style={styles.text}>{this.props.title}</Text>
        {
          //<View style={{ flexDirection: "row" }}>
          // <Icon
          //   name="map-marker"
          //   backgroundColor="#3b5998"
          //   style={{ padding: 5 }}
          // />
          // <Text style={{ paddingTop: 5 }}>{this.props.location}</Text>
          //</View>
        }
        <Text style={{ padding: 10 }}>{this.props.desc}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}

const cards = [
  {
    title: "cool project",
    image: "https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif"
  }
];

const cards2 = [
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
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      likedCards: []
    };

    this.handleYup = this.handleYup.bind(this);

    let api = Api.getInstance();
    console.log(" hallo");
    api.callApi(
      "getAllProjects",
      "POST",
      {
        hello: "hello"
      },
      response => {
        console.log(response["response"]);
        this.setState({
          cards: response["response"],
          loading: false
        });
      }
    );
  }

  handleYup(card) {
    let data = {
      projectId: card.id,
      userId: 1
    };
    console.log(data);
    let api = Api.getInstance();
    api.callApi("addLike", "POST", data, response => {});
  }

  handleNope(card) {
    console.log("nope");
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3;

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(
        `There are only ${this.state.cards.length - index - 1} cards left.`
      );

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`);

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        });
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <SwipeCards
          cards={this.state.cards}
          loop={false}
          dragY={false}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}
          nopeText={"Nope!"}
          yupText={"Interessant!"}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved.bind(this)}
        />
        <View style={{ flexDirection: "row", paddingBottom: 25 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#f44336",
              borderRadius: 60,
              height: 60,
              width: 60
            }}
          >
            <Icon
              name="thumb-down-outline"
              color="white"
              size={30}
              style={{ padding: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#03a9f4",
              borderRadius: 60,
              height: 60,
              width: 60,
              marginLeft: 25
            }}
          >
            <Icon
              name="message-text-outline"
              color="white"
              size={30}
              style={{ padding: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#64dd17",
              borderRadius: 60,
              height: 60,
              width: 60,
              marginLeft: 25
            }}
          >
            <Icon
              name="thumb-up-outline"
              color="white"
              size={30}
              style={{ padding: 15 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 5,
    width: 300,
    height: "95%"
  },
  thumbnail: {
    width: "100%",
    height: "50%"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linearGradient: {
    height: 75,
    marginTop: 225,
    justifyContent: "center",
    alignItems: "center"
  }
});

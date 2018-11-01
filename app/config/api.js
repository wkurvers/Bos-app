import React from "react";
import { NetInfo } from "react-native";

export default class Api {
  static instance = null;

  url = "http://172.20.10.2:5000/";

  static getInstance() {
    if (Api.instance == null) {
      Api.instance = new Api();
    }

    return Api.instance;
  }

  callApi(action, method, data, callBack = response => console.log(response)) {
    console.log(" calling");
    if (method == "GET") {
      fetch(this.url + action, {
        method: method,
        headers: {
          "Content-Type": "application/json"

        }
      })
        .then(response => response.json())
        .then(responseJson => callBack(responseJson))
        .catch(error => {
          callBack(error);
        });
    } else if (method == "POST") {
      console.log(this.url + action);
      fetch(this.url + action, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(responseJson => callBack(responseJson))
        .catch(error => {
          callBack(error);
        });
    }
  }
}

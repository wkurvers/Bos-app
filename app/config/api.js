import React from "react";

export default class Api {
  static instance = null;

  url = "145.100.213.174:5000/";

  static getInstance() {
    if (Api.instance == null) {
      Api.instance = new Api();
    }

    return Api.instance;
  }

  callApi(action, method, data, callBack = response => console.log(response)) {
    if (method == "GET") {
      fetch(action, {
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
      fetch(this.url + action, {
        method: method,
        headers: {
          Accept: "application/json",
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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { observable, autorun, action } from "mobx";

class ShoppingCart {
  @observable
  items = [];

  @action
  add(item) {
    this.items.push(item);
  }
}
const mycart = new ShoppingCart();

autorun(() => {
  console.log(mycart.items.length);
  console.log(mycart.items.map((cart) => cart.name));
});

mycart.add({ name: "computer", price: 200 });
mycart.add({ name: "computer2", price: 200 });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

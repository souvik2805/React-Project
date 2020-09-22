import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { observable, action, autorun } from "mobx";

class shopingCart {
  @observable
  items = [];

  @observable
  totalPrice = 0;

  @action
  add(item) {
    this.items.push(item);
    this.totalPrice += item.price;
  }
}

const mycart = new shopingCart();

autorun(() => {
  console.log(mycart.items.length);

  console.log("Total Price = " + mycart.totalPrice);
});

mycart.add({ name: "Computer", price: 50 });
mycart.add({ name: "Mouse", price: 50 });

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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { observable, computed, action, autorun } from "mobx";

class ShoppingCart {
  @observable
  items = [];

  @computed
  get totalPrice() {
    return this.items.reduce((acc, curr) => acc + curr.price, 0);
  }

  @action
  add(item) {
    this.items.push(item);
  }
}

const MyCart = new ShoppingCart();
autorun(() => {
  console.log(MyCart.items.length);
  console.log(MyCart.items.map((item) => item.Name));
  console.log(MyCart.totalPrice);
});

MyCart.add({ Name: "Computer", price: 100 });
MyCart.add({ Name: "Biswas", price: 200 });

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

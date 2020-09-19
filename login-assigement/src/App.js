import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Lifecycle from "./components/Lifecycle";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route
            path="/lifecycle"
            component={() => <Lifecycle color="BLUE" />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { inject, observer } from "mobx-react";

@inject("BirdStore")
@observer
class App extends React.Component {
  render() {
    const { BirdStore } = this.props;
    return (
      <div className="App">
        <h3>You have total {BirdStore.birdCount}</h3>
      </div>
    );
  }
}

export default App;

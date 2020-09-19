import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), favColor: "red", name: "XYZ" };
    console.log("1. Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Called ");
    return { favColor: props.color };
  }
  componentDidMount() {
    console.log("3. componentDidMount Called");
    // this.timeId = setInterval(() => this.tick(), 1000);
    setTimeout(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  //   __________________Updating___________________

  changeName = () => {
    this.setState({ name: "Souvik" });
  };

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate(true) Called -- > Updating");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Called -- > Updating");
    return (document.getElementById("id1").innerHTML =
      "Before the update, the Name was " + prevState.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Called -- > Updating");
    document.getElementById("id2").innerHTML =
      "The updated Name is  " + this.state.name;
  }

  componentWillUnmount() {
    console.log("Component Will Unmount Called -");
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div>
        {console.log("RENDER CALLED --->")}
        <p id="id1"></p>
        <p id="id2"></p>
        <h4>My Name is {this.state.name}</h4>
        <button type="button" onClick={this.changeName}>
          Change Name
        </button>

        <p>My Fav. Color is {this.state.favColor}</p>
        <p>
          <b>Current Time {this.state.date.toLocaleTimeString()}</b>
        </p>
      </div>
    );
  }
}

// class Header extends React.Component {
//   componentWillUnmount() {
//     alert("Header Compoenet Will Unmount");
//     console.log("componentWillUnmount Called ");
//   }
//   render() {
//     return (
//       <div>
//         <p>My Fav. Color is {this.props.color}</p>
//         <p>
//           <b>Current Time {this.state.date.toLocaleTimeString()}</b>
//         </p>
//       </div>
//     );
//     <h1>Hello World!</h1>;
//   }
// }

export default Lifecycle;

//  Why Two time Construtor , Render call
// Why static before the getDerivedStateFromProps
// componentWillMount
// componentWillReceiveProps
// componentWillUpdate

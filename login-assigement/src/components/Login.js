import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username must be 5 Character Length" : "";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "password must be 8 Character Length" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    console.log(this.state.errors);
  };

  handleSubmit = (event) => {
    let { username, password } = this.state.errors;
    if (username === "" && password === "") {
      alert("Succcesfully. This is a Valid Form");
    } else {
      alert("Wrong... This is a InValid Form");
      event.preventDefault();
    }
  };

  showError = (event) => {
    return <p className="error">{this.state.errors.event}</p>;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username(Email)
          <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
        </label>

        <br />
        <label>
          Password:
          <input
            type="text"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          {this.showError("password")}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;

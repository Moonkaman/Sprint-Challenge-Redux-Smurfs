import React, { Component } from "react";
import { connect } from "react-redux";

import SmurfForm from "../components/SmurfForm";

class SmurfFormView extends Component {
  state = {
    smurf: {
      name: "",
      height: "",
      age: ""
    }
  };

  handleChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <SmurfForm smurf={this.state.smurf} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(SmurfFormView);

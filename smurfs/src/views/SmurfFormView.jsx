import React, { Component } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

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

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <SmurfForm
          smurf={this.state.smurf}
          handleChange={this.handleChange}
          addSmurf={this.addSmurf}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfFormView);

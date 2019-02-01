import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

class SmurfsView extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        <h1>Smurfs</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsView);

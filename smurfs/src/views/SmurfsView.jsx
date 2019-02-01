import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

import SmurfList from "../components/SmurfList";

class SmurfsView extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        <h1>Smurfs in Village</h1>
        <SmurfList smurfs={this.props.smurfs} />
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

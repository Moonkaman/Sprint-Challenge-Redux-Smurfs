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

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

import SmurfList from "../components/SmurfList";

class SmurfsView extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        <h1>Smurfs in Village</h1>
        {this.props.isFetchingSmurfs ? (
          <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
        ) : (
          <SmurfList smurfs={this.props.smurfs} />
        )}
        <Link to="/smurf-form">
          <button>Add Smurf</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetchingSmurfs: state.isFetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsView);

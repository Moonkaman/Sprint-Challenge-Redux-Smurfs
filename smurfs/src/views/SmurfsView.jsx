import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf } from "../actions";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

import SmurfList from "../components/SmurfList";

import "./SmurfsView.css";

class SmurfsView extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div>
        <h1>Smurfs in Village</h1>
        {this.props.isFetchingSmurfs ? (
          <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
        ) : (
          <SmurfList
            smurfs={this.props.smurfs}
            deleteSmurf={this.deleteSmurf}
          />
        )}
        <Link to="/smurf-form">
          <button className="add-smurf-btn">Add Smurf</button>
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
  { fetchSmurfs, deleteSmurf }
)(SmurfsView);

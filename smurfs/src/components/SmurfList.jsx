import React from "react";

import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <div className="smurf-list-wrapper">
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} deleteSmurf={props.deleteSmurf} />
      ))}
    </div>
  );
};

export default SmurfList;

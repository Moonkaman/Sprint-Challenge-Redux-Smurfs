import React from "react";

import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <div className="smurf-list-wrapper">
      {props.smurfs.map((smurf, index) => (
        <Smurf key={index} smurf={smurf} />
      ))}
    </div>
  );
};

export default SmurfList;

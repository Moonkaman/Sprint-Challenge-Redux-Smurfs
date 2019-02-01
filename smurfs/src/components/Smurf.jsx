import React from "react";

const Smurf = props => {
  return (
    <div className="smurf-cont">
      <h2>{props.smurf.name}</h2>
      <p>Age {props.smurf.age}</p>
      <p>Height {props.smurf.height}</p>
      <button onClick={e => props.deleteSmurf(e, props.smurf.id)}>
        Delete
      </button>
    </div>
  );
};

export default Smurf;

import React from "react";

const SmurfForm = props => {
  return (
    <form onSubmit={props.addSmurf}>
      <input
        type="text"
        placeholder="Name..."
        name="name"
        onChange={props.handleChange}
        value={props.smurf.name}
      />
      <input
        type="text"
        placeholder="Height..."
        name="height"
        onChange={props.handleChange}
        value={props.smurf.height}
      />
      <input
        type="text"
        placeholder="Age..."
        name="age"
        onChange={props.handleChange}
        value={props.smurf.age}
      />
      <button>Add Smurf</button>
    </form>
  );
};

export default SmurfForm;

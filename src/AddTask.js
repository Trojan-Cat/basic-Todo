import React, { useImperativeHandle } from "react";

function AddTask(props) {
  return (
    <div>
      <input
        value={props.textValue}
        name="textbox"
        onChange={props.handleChange}
      ></input>
      <button onClick={props.handleClick}>asdasd</button>
    </div>
  );
}

export default AddTask;

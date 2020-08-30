import React from "react";

function AddTask(props) {
  return (
    <div>
      <input
        value={props.textValue}
        name="textbox"
        onChange={props.handleChange}
      ></input>
      <button onClick={props.handleClick}>Add Task</button>
    </div>
  );
}

export default AddTask;

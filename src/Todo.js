import React from "react";

function Todo({ value, id, status, handleStatus }) {
  return (
    <div>
      <div>{value}</div>
      <button onClick={() => handleStatus(id)}>X</button>
    </div>
  );
}
export default Todo;

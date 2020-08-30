import React from "react";
import Todo from "./Todo";

function TaskList({ tasks, handleStatus }) {
  const todos = tasks.map((todo, id) => (
    <Todo
      key={id}
      id={id}
      value={todo.tValue}
      status={todo.tStatus}
      handleStatus={handleStatus}
    />
  ));
  return <div>{todos}</div>;
}

export default TaskList;

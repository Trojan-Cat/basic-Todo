import React from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.state = {
      todos: [],
      textbox: "",
    };
  }

  // Updates the textbox if there is a change to it
  handleChange(e) {
    this.setState({ textbox: e.target.value });
  }

  // This will add in a todo, it takes in the value of the textbox, and does some basic validation to make sure that there is at least some input in there
  handleClick(i) {
    if (this.state.textbox.length === 0) {
      return;
    }
    const textBoxValue = this.state.textbox;
    const newTodos = this.state.todos.concat([
      { tStatus: false, tValue: textBoxValue },
    ]);
    this.setState({ todos: newTodos, textbox: "" });
  }

  //Allows the user to change the status of a todo to be either done or not done
  // Finds the status in the array, and sets it to the opposite of what it is
  // Status is not currently being used for the todo, we could set it to done, and make it look different, but have decided to just use a splice to remove it for now
  handleStatus(i) {
    console.log("Clicked");
    let newArray = this.state.todos.slice();
    // newArray[i].tStatus = !newArray[i].tStatus;
    newArray.splice(i, 1);
    this.setState({ todos: newArray });
  }

  render() {
    let textValue = this.state.textbox;
    let tasks = this.state.todos.slice();
    const handleChange = this.handleChange;
    const handleClick = this.handleClick;
    const handleStatus = this.handleStatus;
    return (
      <div>
        <AddTask
          textValue={textValue}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <TaskList tasks={tasks} handleStatus={handleStatus} />
      </div>
    );
  }
}

export default App;

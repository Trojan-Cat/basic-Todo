import React from "react";

import AddTask from "./AddTask";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      todos: [],
      textbox: "asdsad",
    };
  }

  handleChange(e) {
    this.setState({ textbox: e.target.value });
  }

  handleClick(i) {
    const textBoxValue = this.state.textbox;
    const newTodos = this.state.todos.concat([
      { tstatus: false, tValue: textBoxValue },
    ]);
    this.setState({ todos: newTodos });
  }

  render() {
    let textValue = this.state.textbox;
    const handleChange = this.handleChange;
    const handleClick = this.handleClick;
    return (
      <div>
        <AddTask
          textValue={textValue}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        {/* <TaskList /> */}
      </div>
    );
  }
}

export default App;

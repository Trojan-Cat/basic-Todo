import React from "react";

import AddTask from "./AddTask";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ tstatus: false, tValue: null }],
      textbox: "asdsad",
    };
  }

  handleChange(e) {}

  //handleClick(i)

  render() {
    let textValue = this.state.textbox;
    return (
      <div>
        <AddTask textValue={textValue} handleChange={this.handleChange} />
        {/* <TaskList /> */}
      </div>
    );
  }
}

export default App;

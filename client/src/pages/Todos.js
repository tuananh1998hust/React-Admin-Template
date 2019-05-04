import React, { Component } from "react";

import TodoWork from "../components/TodoWork";

class Todos extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-5">TodoWork</h2>
        <TodoWork />
      </div>
    );
  }
}

export default Todos;

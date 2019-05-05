import React, { Component } from "react";

import TodoWork from "../components/TodoWork";
import AddTodo from "../components/AddTodo";

class Todos extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-5">TodoWork</h2>
        <AddTodo />
        <TodoWork />
      </div>
    );
  }
}

export default Todos;

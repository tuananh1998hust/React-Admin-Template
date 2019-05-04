import React, { Component } from "react";
import { Button } from "reactstrap";

// Images
import check from "../images/check.png";
import done from "../images/done.png";

// CSS
import "./TodoWork.css";

class TodoWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { id: 0, title: "Work 1", isCompleted: true },
        { id: 1, title: "Work 2", isCompleted: false },
        { id: 2, title: "Work 3", isCompleted: false }
      ]
    };
  }

  onSuccessClick = id => {
    this.setState(state => ({
      todolist: state.todolist.map(item => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    }));
  };

  onDeleteClick = id => {
    this.setState(state => ({
      todolist: state.todolist.filter(item => item.id !== id)
    }));
  };

  render() {
    const { todolist } = this.state;

    return (
      <div className="list">
        {todolist.map(item => (
          <div className="item" key={item.id}>
            <div
              className="check"
              onClick={this.onSuccessClick.bind(this, item.id)}
            >
              <img
                className="img"
                src={item.isCompleted ? done : check}
                alt="check"
              />
              {item.title}
            </div>
            <Button
              size="sm"
              color="danger"
              className="btn"
              onClick={this.onDeleteClick.bind(this, item.id)}
            >
              &times;
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoWork;

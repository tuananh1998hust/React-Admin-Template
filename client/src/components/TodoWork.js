import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTodolist } from "../actions/todoActions";

// Images
import check from "../images/check.png";
import done from "../images/done.png";

// CSS
import "./TodoWork.css";

class TodoWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const { todolist } = this.props.todolist;

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

TodoWork.propTypes = {
  todolist: PropTypes.object.isRequired,
  getTodolist: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todolist: state.todolist
});

export default connect(
  mapStateToProps,
  { getTodolist }
)(TodoWork);

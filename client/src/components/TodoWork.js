import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTodolist, successClick, deleteClick } from "../actions/todoActions";

// Images
import check from "../images/check.png";
import done from "../images/done.png";

// CSS
import "./TodoWork.css";

class TodoWork extends Component {
  componentDidMount() {
    this.props.getTodolist();
  }

  onSuccessClick = id => {
    this.props.successClick(id);
  };

  onDeleteClick = id => {
    this.props.deleteClick(id);
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
  getTodolist: PropTypes.func.isRequired,
  successClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todolist: state.todolist
});

export default connect(
  mapStateToProps,
  { getTodolist, successClick, deleteClick }
)(TodoWork);

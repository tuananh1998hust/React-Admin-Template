import React, { Component } from "react";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addTodo } from "../actions/todoActions";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onKeyUp = e => {
    if (e.keyCode === 13) {
      const newTodo = {
        title: this.state.title,
        isCompleted: false
      };

      this.props.addTodo(newTodo);

      this.setState({
        title: ""
      });
    }
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          placeholder="Add new work"
          style={{ width: "300px" }}
        />
      </div>
    );
  }
}

AddTodo.propTypes = {
  todolist: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todolist: state.todolist
});

export default connect(
  mapStateToProps,
  { addTodo }
)(AddTodo);

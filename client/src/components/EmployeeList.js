import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getEmployeeList } from "../actions/employeeActions";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.getEmployeeList();
  }
  onDeleteClick = id => {
    this.setState(state => ({
      employeeList: state.employeeList.filter(item => item.id !== id)
    }));
  };

  addEmployee = () => {
    console.log("Add New Employee");
  };

  render() {
    const { employeeList } = this.props.employeeList;

    return (
      <div>
        <Button className="mb-5" onClick={this.addEmployee}>
          Add New Employee
        </Button>
        <Table hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.position}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, item.id)}
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  employeeList: PropTypes.object.isRequired,
  getEmployeeList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employeeList: state.employeeList
});

export default connect(
  mapStateToProps,
  { getEmployeeList }
)(EmployeeList);

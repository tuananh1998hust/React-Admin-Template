import React, { Component } from "react";

import EmployeeList from "../components/EmployeeList";

class Employees extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-5">Employee List</h2>
        <EmployeeList />
      </div>
    );
  }
}

export default Employees;

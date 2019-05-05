import React, { Component } from "react";

import EmployeeList from "../components/EmployeeList";
import EmployeeModal from "../components/EmployeeModal";

class Employees extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-5">Employee List</h2>
        <EmployeeModal />
        <EmployeeList />
      </div>
    );
  }
}

export default Employees;

import React, { Component } from "react";

import CustomerList from "../components/CustomerList";

class Customers extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-5">Customers List</h2>
        <CustomerList />
      </div>
    );
  }
}

export default Customers;

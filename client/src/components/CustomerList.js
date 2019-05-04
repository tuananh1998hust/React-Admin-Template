import React, { Component } from "react";
import { Table } from "reactstrap";

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: [
        {
          id: 0,
          name: "Mr A",
          email: "a@gmail.com",
          phone: "0123456"
        },
        {
          id: 1,
          name: "Mr B",
          email: "b@gmail.com",
          phone: "0123456"
        },
        {
          id: 2,
          name: "Mr C",
          email: "c@gmail.com",
          phone: "0123456"
        }
      ]
    };
  }

  render() {
    const { customerList } = this.state;
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default CustomerList;

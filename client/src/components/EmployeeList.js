import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [
        {
          id: 0,
          name: "Nguyen Tuan Anh",
          email: "tuananh1998.hust@gmail.com",
          phone: "0349081709",
          address: "Dan Phuong Hanoi",
          gender: "Male",
          position: "IT Leader"
        },
        {
          id: 1,
          name: "Nguyen Tuan Anh",
          email: "tuananh1998.hust@gmail.com",
          phone: "0349081709",
          address: "Dan Phuong Hanoi",
          gender: "Male",
          position: "Lab Leader"
        },
        {
          id: 2,
          name: "Nguyen Tuan Anh",
          email: "tuananh1998.hust@gmail.com",
          phone: "0349081709",
          address: "Dan Phuong Hanoi",
          gender: "Male",
          position: "manager"
        }
      ]
    };
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
    const { employeeList } = this.state;

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

export default EmployeeList;

import React, { Component } from "react";
import { Table, Button } from "reactstrap";

// Images
import check from "../images/check.png";
import done from "../images/done.png";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [
        {
          id: 0,
          nameProduct: "CNC 3 truc",
          imgUrl: "http://lorempixel.com/240/120/",
          nameCustomer: "Mr. A",
          emailCustomer: "a@gmail.com",
          phone: "0123456",
          isDone: true
        },
        {
          id: 1,
          nameProduct: "CNC 4 truc",
          imgUrl: "http://lorempixel.com/240/120/",
          nameCustomer: "Mr. B",
          emailCustomer: "b@gmail.com",
          phone: "0123456",
          isDone: false
        },
        {
          id: 2,
          nameProduct: "CNC 5 truc",
          imgUrl: "http://lorempixel.com/240/120/",
          nameCustomer: "Mr. C",
          emailCustomer: "c@gmail.com",
          phone: "0123456",
          isDone: false
        }
      ]
    };
  }

  onCheckClick = id => {
    this.setState(state => ({
      orderList: state.orderList.map(item => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    }));
  };

  onDeleteClick = id => {
    this.setState(state => ({
      orderList: state.orderList.filter(item => item.id !== id)
    }));
  };

  render() {
    const { orderList } = this.state;
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Check</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map(item => (
            <tr key={item.id}>
              <td>
                <p className="mb-2">{item.nameProduct}</p>
                <img src={item.imgUrl} alt="product" />
              </td>
              <td>{item.nameCustomer}</td>
              <td>{item.emailCustomer}</td>
              <td>{item.phone}</td>
              <td onClick={this.onCheckClick.bind(this, item.id)}>
                <img src={item.isDone ? done : check} alt="check" />
              </td>
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
    );
  }
}

export default OrderList;

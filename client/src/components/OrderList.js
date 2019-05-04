import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getOrderList } from "../actions/orderActions";

// Images
import check from "../images/check.png";
import done from "../images/done.png";

class OrderList extends Component {
  componentDidMount() {
    this.props.getOrderList();
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
    const { orderList } = this.props.orderList;
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

OrderList.propTypes = {
  orderList: PropTypes.object.isRequired,
  getOrderList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  orderList: state.orderList
});

export default connect(
  mapStateToProps,
  { getOrderList }
)(OrderList);

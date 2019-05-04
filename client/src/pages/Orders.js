import React, { Component } from "react";

// Components
import OrderList from "../components/OrderList";

class Orders extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-5">ORDERS LIST</h2>
        <OrderList />
      </div>
    );
  }
}

export default Orders;

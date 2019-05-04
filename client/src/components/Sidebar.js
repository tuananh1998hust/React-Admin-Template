import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

// Images
import order from "../images/order.png";
import customer from "../images/customer.png";
import product from "../images/product.png";
import employee from "../images/employee.png";
import todo from "../images/todo.png";

class Sidebar extends Component {
  render() {
    return (
      <div style={{ borderRight: "2px solid #DDD" }}>
        <h2 className="mb-3">Dash Board</h2>
        <Nav vertical>
          <NavItem>
            <Link to="/orders">
              <img className="m-3" src={order} alt="order" />
              Orders
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/customers">
              <img className="m-3" src={customer} alt="customer" />
              Customers
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/products">
              <img className="m-3" src={product} alt="products" />
              Products
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/employees">
              <img className="m-3" src={employee} alt="employee" />
              Employees
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/todos">
              <img className="m-3" src={todo} alt="todo" />
              Todos
            </Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;

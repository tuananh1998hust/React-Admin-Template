import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCustomerList } from "../actions/customerActions";

class CustomerList extends Component {
  render() {
    const { customerList } = this.props.customerList;
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

CustomerList.propTypes = {
  customerList: PropTypes.object.isRequired,
  getCustomerList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  customerList: state.customerList
});

export default connect(
  mapStateToProps,
  { getCustomerList }
)(CustomerList);

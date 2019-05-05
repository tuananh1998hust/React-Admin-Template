import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getProductList, setCurrentProduct } from "../actions/productActions";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProductList();
  }

  onSetCurrentProduct = id => {
    const num = prompt("Enter Current Products: ");
    const count = { count: parseInt(num) };
    if (num) {
      this.props.setCurrentProduct(count, id);
    }
  };

  render() {
    const { productList } = this.props.productList;
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Type Product</th>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Current</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <p className="mb-2">{item.name}</p>
                  <img src={item.imgUrl} alt="product" />
                </td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td onClick={this.onSetCurrentProduct.bind(this, item.id)}>
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired,
  setCurrentProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(
  mapStateToProps,
  { getProductList, setCurrentProduct }
)(ProductList);

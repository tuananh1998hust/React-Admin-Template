import React, { Component } from "react";

import ProductList from "../components/ProductList";

class Products extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-5">Products List</h2>
        <ProductList />
      </div>
    );
  }
}

export default Products;

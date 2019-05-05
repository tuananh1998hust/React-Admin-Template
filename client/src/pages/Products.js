import React, { Component } from "react";

import ProductList from "../components/ProductList";
import ProductModal from "../components/ProductModal";

class Products extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-5">Products List</h2>
        <ProductModal />
        <ProductList />
      </div>
    );
  }
}

export default Products;

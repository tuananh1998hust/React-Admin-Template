import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 0,
          name: "CNC",
          imgUrl: "http://lorempixel.com/240/120/",
          price: 100,
          desc: "Lorem pixel is dumply text",
          count: 100
        },
        {
          id: 1,
          name: "CNC",
          imgUrl: "http://lorempixel.com/240/120/",
          price: 100,
          desc: "Lorem pixel is dumply text",
          count: 100
        },
        {
          id: 2,
          name: "CNC",
          imgUrl: "http://lorempixel.com/240/120/",
          price: 100,
          desc: "Lorem pixel is dumply text",
          count: 100
        }
      ]
    };
  }

  onSetCurrentProduct = id => {
    const num = prompt("Enter Current Products: ");
    if (num) {
      this.setState(state => ({
        productList: state.productList.map(item => {
          if (item.id === id) {
            item.count = parseInt(num);
          }
          return item;
        })
      }));
    }
  };

  addProduct = () => {
    console.log("Add Product");
  };

  render() {
    const { productList } = this.state;
    return (
      <div>
        <Button className="mb-5" onClick={this.addProduct}>
          Add New Product
        </Button>
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

export default ProductList;

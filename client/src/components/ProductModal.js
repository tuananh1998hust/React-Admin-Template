import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addProduct } from "../actions/productActions";

class ProductModal extends Component {
  state = {
    modal: false,
    name: "",
    imgUrl: "",
    price: "",
    desc: "",
    count: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, imgUrl, price, desc, count } = this.state;
    const newProduct = {
      name,
      imgUrl,
      price,
      desc,
      count
    };
    this.props.addProduct(newProduct);

    this.toggle();
  };

  render() {
    return (
      <div className="mb-3">
        <Button onClick={this.toggle}>Add New Employee</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Employee</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Label for="imgUrl">Images Url</Label>
                <Input
                  id="imgUrl"
                  name="imgUrl"
                  type="text"
                  placeholder="Images Url"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Label for="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Label for="desc">Description</Label>
                <Input
                  id="desc"
                  name="desc"
                  type="text"
                  placeholder="Description"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Label for="count">Current</Label>
                <Input
                  id="count"
                  name="count"
                  type="text"
                  placeholder="Current"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Button block>Add</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ProductModal.propTypes = {
  productList: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(
  mapStateToProps,
  { addProduct }
)(ProductModal);

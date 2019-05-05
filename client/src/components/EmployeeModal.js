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

import { addEmployee } from "../actions/employeeActions";

class EmployeeModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    phone: "",
    position: "",
    gender: "",
    address: ""
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
    const { name, email, phone, position, gender, address } = this.state;
    const newEmployee = {
      name,
      email,
      phone,
      position,
      gender,
      address
    };
    this.props.addEmployee(newEmployee);

    this.toggle();
  };

  render() {
    return (
      <div className="mb-3">
        <Button color="primary" onClick={this.toggle}>
          Add New Employee
        </Button>
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
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Label for="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Label for="position">Position</Label>
                <Input
                  id="position"
                  name="position"
                  type="text"
                  placeholder="Position"
                  className="mb-2"
                  onChange={this.onChange}
                />
                <Label check>
                  <Input
                    value="male"
                    type="radio"
                    name="gender"
                    className="mb-2 ml-5"
                    onChange={this.onChange}
                  />{" "}
                  Male
                </Label>
                <br />
                <Label check>
                  <Input
                    id="female"
                    type="radio"
                    name="gender"
                    className="mb-2 ml-5"
                    onChange={this.onChange}
                  />{" "}
                  Female
                </Label>
                <br />
                <Label for="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
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

EmployeeModal.propTypes = {
  employeeList: PropTypes.object.isRequired,
  addEmployee: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employeeList: state.employeeList
});

export default connect(
  mapStateToProps,
  { addEmployee }
)(EmployeeModal);

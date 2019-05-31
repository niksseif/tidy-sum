import React, { Component } from "react";
import { Modal, Icon, Button, Input, Form, TextArea } from "semantic-ui-react";
import { editUserExpense } from "../redux/actions";
import { connect } from "react-redux";

class ExpenseModal extends Component {
  state = {
    edit: this.props.edit,
    expense: {
      id: this.props.id,
      users_id: this.props.usersData[0].id,
      category: "",
      amount: null,
      description: ""
    }
  };
  //--------handling the form change for income
  handleChange = (e, { value }) => {
    e.preventDefault();
    this.setState({
      expense: { ...this.state.expense, [e.target.name]: e.target.value }
    });
  };

  // -----handling PUT request to the api
  handleEdit(data) {
    let userId = this.props.usersData[0].id;

    let editedIncome = data.expense;

    this.props.editUserExpense(userId, editedIncome);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.handleEdit(this.state);
  };

  render() {
    const {
      expenseCategory,
      expenseAmount,
      expenseDescription,
      expenseTotal
    } = this.state;

    return (
      <div
        style={{
          marginTop: "5vw",
          marginBottom: "5vw",
          marginLeft: "3vw",
          marginRight: "3vw"
        }}
      >
        <Form>
          <Form.Group>
            <Form.Field
              control={Input}
              icon="dollar sign"
              placeholder={expenseCategory}
              label="EXPENSE CATEGORY"
              onChange={this.handleChange}
              name="category"
            />
            <Form.Field
              control={Input}
              placeholder={expenseAmount}
              label="EXPENSE AMOUNT"
              onChange={this.handleChange}
              name="amount"
            />
            <Form.Field
              control={Input}
              placeholder={expenseTotal}
              label="EXPENSE TOTAL"
              onChange={this.handleChange}
              name="total"
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            icon="dollar sign"
            placeholder={expenseDescription}
            label="DESCRIPTION"
            onChange={this.handleChange}
            name="description"
          />

          <Modal.Actions>
            <Button color="red">
              <Icon name="remove" /> No
            </Button>
            <Button type="submit" color="green" onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  usersData: state.usersData,
  newExpense: state.newExpense
});

export default connect(
  mapStateToProps,
  { editUserExpense }
)(ExpenseModal);

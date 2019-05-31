import React, { Component } from "react";
import {
  Modal,
  Header,
  Icon,
  Button,
  Input,
  Form,
  TextArea
} from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUserData, fetchUserIncome, handleAdd } from "../redux/actions";
// import { bindActionCreators } from "../../../../../../Library/Caches/typescript/3.3/node_modules/redux";

//TODO: Add sweet alert to this response
//TODO: Add redux to this project

class IncomeAdd extends Component {
  state = {
    newIncome: {
      users_id: this.props.usersId.id
    }
  };
  //--------handling the form change for income
  handleChange = (e, { value }) => {
    e.preventDefault();
    this.setState({
      newIncome: { ...this.state.newIncome, [e.target.name]: e.target.value }
    });
  };

  //------------handle submit
  handleSubmit = async e => {
    e.preventDefault();
    await this.props.handleAdd(this.state.newIncome);
    this.props.onClose();
  };

  render() {
    return (
      <div
        style={{
          marginTop: "5vw",
          marginBottom: "5vw",
          marginLeft: "3vw",
          marginRight: "3vw"
        }}
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field
              control={Input}
              icon="dollar sign"
              placeholder="label"
              label="INCOME LABEL"
              onChange={this.handleChange}
              name="label"
            />
            <Form.Field
              control={Input}
              placeholder="source"
              label="INCOME SOURCE"
              onChange={this.handleChange}
              name="source"
            />
            <Form.Field
              control={Input}
              placeholder="must be a number"
              label="INCOME AMOUNT"
              onChange={this.handleChange}
              name="amount"
              type="number"
              required
              pattern="[0-9]"
            />
            <Form.Field
              control={Input}
              placeholder="must be a number"
              label="INCOME TOTAL"
              onChange={this.handleChange}
              name="total"
              type="number"
              required
              pattern="[0-9]"
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            icon="dollar sign"
            placeholder="description"
            label="DESCRIPTION"
            onChange={this.handleChange}
            name="description"
          />

          <Modal.Actions>
            <Button type="submit" color="green">
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
  newIncome: state.newIncome
});

export default connect(
  mapStateToProps,
  { handleAdd }
)(IncomeAdd);

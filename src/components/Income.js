import React, { Component } from "react";
import IncomeModalEdit from "./IncomeModalEdit";
import IncomeAdd from "./IncomeAdd";
import {
  List,
  Icon,
  Label,
  Segment,
  Modal,
  ListItem,
  Reveal
} from "semantic-ui-react";
import { connect } from "react-redux";
import {
  fetchUserData,
  fetchUserIncome,
  handleDeleteReq,
  handleAdd,
  getUser
} from "../redux/actions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
//TODO: 1.Display existing income
//      2.Add to existing income
//      3. Delete from existing Income
class IncomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      reveal: false
    };
  }
  async componentDidMount() {
    await this.props.fetchUserData();

    let id = this.props.usersData[0].id;
    await this.props.fetchUserIncome(id);
  }

  // Calculate the sum of the amount from each income
  calcTotal = arr => {
    let res = arr.reduce((acc, item) => {
      let amount = item.amount;
      acc += amount;
      return acc;
    }, 0);
    return res;
  };

  //handle total change
  changeTotalState(calcTotal) {
    this.setState({ total: this.state.total + calcTotal() });
  }

  //handle delete after the response is ok than set the state to the new state
  handleDelete = async (e, data) => {
    e.preventDefault();

    let userId = this.props.usersData[0].id;

    if (data) {
      await this.props.handleDeleteReq(data.id, userId);
    }
  };

  close = () => this.setState({ reveal: false });

  render() {
    const { edit, reveal, open } = this.state;
    let income = this.props.userIncome;
    let usersData = this.props.usersData;
    let usersId = this.props.usersData[0];

    return (
      <Segment
        style={{ backgroundColor: "#DBE2DD", marginTop: "1vw", opacity: "0.9" }}
      >
        <List divided relaxed>
          <ListItem style={{ display: "flex", justifyContent: "center" }}>
            <Icon
              name="add square"
              onClick={() => {
                this.setState({ reveal: true });
              }}
            />

            <Icon
              name="remove square"
              onClick={() => {
                this.setState({ reveal: false });
              }}
            />
            <div>
              {this.state.reveal && this.props.userIncome && (
                <Reveal.Content visible onClose={this.close}>
                  <IncomeAdd
                    income={income}
                    usersData={usersData}
                    usersId={usersId}
                    reveal={reveal}
                    onClose={this.close}
                  />
                </Reveal.Content>
              )}
            </div>
          </ListItem>
          {!income
            ? "Loading ...."
            : income.map(item => {
                return (
                  <List.Item key={item.id}>
                    <List.Icon
                      name="dollar sign"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header>SOURCE: {item.source}</List.Header>
                      <List.Description>
                        DESCRIPTION: {item.description}
                      </List.Description>
                      <Label>
                        <Label.Detail>LABEL: {item.label}</Label.Detail>
                      </Label>
                      <Label>
                        <Label.Detail>AMOUNT: ${item.amount}</Label.Detail>
                      </Label>
                    </List.Content>
                    <Modal
                      trigger={
                        <Icon
                          name="edit"
                          onClick={() => {
                            this.setState({ edit: true });
                          }}
                        />
                      }
                    >
                      <IncomeModalEdit
                        // users_id = {user[0].id}
                        id={item.id}
                        edit={edit}
                        incomeLabel={item.label}
                        incomeSource={item.source}
                        incomeDescription={item.description}
                        incomeAmount={item.amount}
                      />
                    </Modal>
                    <Icon
                      id={item.id}
                      name="delete"
                      onClick={this.handleDelete}
                    />
                  </List.Item>
                );
              })}
          {!income ? (
            "Loading...."
          ) : (
            <List.Item>
              <List.Icon
                name="dollar sign"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header>TOTAL INCOME</List.Header>
                {<List.Description>${this.calcTotal(income)}</List.Description>}
              </List.Content>
            </List.Item>
          )}
        </List>
      </Segment>
    );
  }
}
const mapStateToProps = state => ({
  usersData: state.usersData,
  userIncome: state.userIncome
});

export default connect(
  mapStateToProps,
  { fetchUserData, fetchUserIncome, handleDeleteReq, handleAdd }
)(IncomePage);

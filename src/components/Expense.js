import React, { Component } from "react";

import ExpenseAdd from './ExpenseAdd'
import { List, Icon, Label, Segment, Modal, ListItem, Reveal } from "semantic-ui-react";
import { connect } from 'react-redux'
import { fetchUserData, fetchUserExpense, deleteUserExpense } from '../redux/actions'

import ExpenseModalEdit from './ExpenseModalEdit'


class ExpensePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            reveal: false,
        };
    }
    async  componentDidMount() {
        await this.props.fetchUserData();
        let id = this.props.usersData[0].id;
        await this.props.fetchUserExpense(id);
        
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


    // handle total change
    changeTotalState(calcTotal) {
        this.setState({ total: this.state.total + calcTotal() });
    }

    //handle delete after the response is ok than set the state to the new state
    handleDelete = async (e, data) => {
        e.preventDefault();
        console.log(data.id)
        let userId = this.props.usersData[0].id
        if (data) {
            let res = await this.props.deleteUserExpense(data.id, userId)

        }
    }

    close = () => this.setState({ reveal: false })


    render() {
        const { edit } = this.state
        let usersData = this.props.usersData
        let usersId = this.props.usersData[0]
        let expense = this.props.userExpense;

      

        return (
            <Segment
                style={{ backgroundColor: "#DBE2DD", marginTop: "1vw", opacity: "0.9" }}
            >
                <List divided relaxed>
                    <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                        <Icon
                            name='add square'
                            onClick={() => { this.setState({ reveal: true }) }}
                        />
                        <Icon
                            name='remove square'
                            onClick={() => { this.setState({ reveal: false }) }}
                        />
                        <div >
                            {(this.state.reveal) && (expense) &&
                                <Reveal.Content visible>
                                    <ExpenseAdd
                                        onClose={this.close}
                                        usersData={usersData}
                                        usersId={usersId}
                                    />
                                </Reveal.Content>
                            }
                        </div>

                    </ListItem>
                    {
                        !expense
                            ? "Loading ...."
                            : expense.map((item) => {
                                return (

                                    <List.Item key={item.id}>
                                        <List.Icon
                                            name="dollar sign"
                                            size="large"
                                            verticalAlign="middle"
                                        />
                                        <List.Content>
                                            <List.Header >SOURCE: {item.source}</List.Header>
                                            <List.Description >
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
                                            trigger={<Icon
                                                name="edit"
                                                onClick={() => { this.setState({ edit: true }) }}
                                            />
                                            }
                                        >
                                            <ExpenseModalEdit
                                             
                                                id={item.id}
                                                edit={edit}
                                                expenseCategory={item.catrgory}
                                                expenseAmount={item.amount}
                                                expenseDescription={item.description}
                                                expenseTotal={item.total}


                                            />

                                        </Modal>
                                        <Icon
                                            id={item.id}
                                            name="delete"
                                            onClick={this.handleDelete}
                                        >
                                        </Icon>
                                    </List.Item>
                                );
                            })
                    } 
                    {!expense ? (
                        "LOADING...."
                    ) : (
                            <List.Item>
                                <List.Icon
                                    name="dollar sign"
                                    size="large"
                                    verticalAlign="middle"
                                />
                                <List.Content>
                                    <List.Header >TOTAL EXPENSE</List.Header>
                                    {<List.Description>${this.calcTotal(expense)}</List.Description>}
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
    userExpense : state.userExpense,

})



export default connect(mapStateToProps, { fetchUserData, fetchUserExpense, deleteUserExpense})(ExpensePage)



import React, { Component } from "react";
import { Modal, Icon, Button, Input, Form, TextArea } from "semantic-ui-react";
import { connect } from 'react-redux'
import { handleAddExpense} from '../redux/actions'


//TODO: Add sweet alert to this response   



class ExpenseAdd extends Component {
    state = {
        newExpense: {
            users_id: this.props.usersId.id
        },
     
    }
    //--------handling the form change for income
    handleChange = (e, { value }) => {
        e.preventDefault();
        this.setState({
            newExpense: { ...this.state.newExpense, [e.target.name]: e.target.value }
        })

    }


    //------------handle submit
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('about to hit the api')
        let res = await this.props.handleAddExpense(this.state.newExpense)
    }

    render() {
  
        return (
            <div style={{ marginTop: '5vw', marginBottom: '5vw', marginLeft: '3vw', marginRight: '3vw' }}>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Field control={Input} placeholder='source' label='CATEGORY' onChange={this.handleChange} name='category' />
                        <Form.Field control={Input} placeholder='must be a number' label='EXPENSE AMOUNT' onChange={this.handleChange} name='amount' type="number" required pattern="[0-9]" />
                        <Form.Field control={Input} placeholder='must be a number' label='EXPENSE TOTAL' onChange={this.handleChange} name='total' type="number" required pattern="[0-9]" />
                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        icon="dollar sign"
                        placeholder='description'
                        label='DESCRIPTION'
                        onChange={this.handleChange}
                        name='description'
                    />


                    <Modal.Actions>
                        <Button
                            type='submit'
                            color="green"
                        >
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

})

export default connect(mapStateToProps, { handleAddExpense})(ExpenseAdd)



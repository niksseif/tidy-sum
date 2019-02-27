import React, { Component } from "react";
import { Modal, Header, Icon, Button, Input, Form, TextArea } from "semantic-ui-react";
import {handleUpdate} from '../redux/actions'
import Income from "./Income";
import { connect } from 'react-redux'

class IncomeModal extends Component {
    state = {
        edit:this.props.edit,
        income: {
                id:this.props.id,
                users_id:this.props.users_id,
                label:this.props.incomeLabel,
                amount:this.props.incomeAmount,
                description: this.props.incomeDescription,
                source:this.props.incomeSource,
        }
    }
    //--------handling the form change for income
    handleChange = (e, { value } ) => {
        e.preventDefault();
        this.setState({ 
            income: { ...this.state.income,[e.target.name]: e.target.value}
        })
        
    }

    // -----handling put request to the api
    //TODO: Add put request to the user income module
    handleEdit (data)  {
      let  userId = this.props.usersData[0].id
      let editedIncome= data.income 
      this.props.handleUpdate(userId,editedIncome)
       
    }
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleEdit(this.state)
  }
 
  render() {
    const {  incomeLabel ,incomeSource , incomeDescription , incomeAmount} = this.state
    
    return (
      <div style={{marginTop:'5vw', marginBottom:'5vw', marginLeft:'3vw',marginRight:'3vw'}}>
      <Form>
          <Form.Group>
            <Form.Field control={Input} icon="dollar sign" placeholder ={incomeLabel} label='INCOME LABEL'onChange={this.handleChange} name='label' />
            <Form.Field control={Input} placeholder={incomeSource} label='INCOME SOURCE' onChange={this.handleChange} name='source'/>
            <Form.Field control={Input} placeholder={incomeAmount} label='INCOME AMOUNT' onChange={this.handleChange}name='amount'/>
        </Form.Group>
            <Form.Field 
            control={TextArea} 
            icon="dollar sign" 
            placeholder={incomeDescription} 
            label='DESCRIPTION' 
            onChange={this.handleChange}
            name = 'description'
            />
   
       
        <Modal.Actions>
          <Button color="red">
            <Icon name="remove" /> No
          </Button>
            <Button type ='submit'color="green" onClick={this.handleSubmit}>
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

})

export default connect(mapStateToProps, { handleUpdate })(IncomeModal)

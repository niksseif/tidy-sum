import React, { Component } from "react";
import { Modal, Header, Icon, Button, Input, Form, TextArea } from "semantic-ui-react";

   
//TODO: Add sweet alert to this response   
//TODO: Add redux to this project


class IncomeAdd extends Component {
    state = {
        incomesArr: this.props.incomesArr,
        income: {
            users_id:this.props.id,
            source: this.props.source,
            description: this.props.description,
            amount: this.props.amount,
            label: this.props.label,
            total:this.props.total,
        }
    }
    //--------handling the form change for income
    handleChange = (e, { value }) => {
    
        e.preventDefault();
        this.setState({
            income: { ...this.state.income, [e.target.name]: e.target.value }
        })

    }
   
//Add post request to the user income module
     handleAdd = async (data) => {
       const res =  await fetch(`http://localhost:5000/income`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
 
         return res 
    }

    //------------handle submit
    handleSubmit = async (e) => {
        e.preventDefault();
        let res= await this.handleAdd(this.state)
        const {  income } = this.state
        if (res){
            let result = this.state.incomesArr
            result.push(income)
            this.setState({ incomesArr: [...result]})    
        }
       
    }


    render() {
        return (
            <div style={{ marginTop: '5vw', marginBottom: '5vw', marginLeft: '3vw', marginRight: '3vw' }}>
                <Form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <Form.Group>
                        <Form.Field control={Input} icon="dollar sign" placeholder='label'label='INCOME LABEL' onChange={this.handleChange} name='label' />
                        <Form.Field control={Input} placeholder='source' label='INCOME SOURCE' onChange={this.handleChange} name='source' />
                        <Form.Field control={Input} placeholder='must be a number' label='INCOME AMOUNT' onChange={this.handleChange} name='amount' type="number" required pattern="[0-9]" />
                        <Form.Field control={Input} placeholder='must be a number' label='INCOME TOTAL' onChange={this.handleChange} name='total' type="number" required pattern="[0-9]"/>
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
                        <Button type='submit' color="green" >
                            <Icon name="checkmark" /> Yes
          </Button>
                    </Modal.Actions>
                </Form>
            </div>
        );
    }
}
export default IncomeAdd;
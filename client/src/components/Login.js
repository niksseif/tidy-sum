import React from 'react';

import { Form, FormGroup, Button } from 'semantic-ui-react'


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            fields: {
                username: '',
                password: ''
            }
        };
    }
//add the handlechange to input based on the value of the input 
    handleChange = e => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({
            fields: newFields
        });
       
    };

    handleSubmit = e => {
        e.preventDefault();
        //todo: this username and password needs to pass to the service.js
        const { fields: { username, password } } = this.state; // current state
        //todo: add authentication from service.js
        //todo: Add withRoute link to dashboard instead of window.location
        return window.location = '/dashboard'
    };

    render() {
        const { fields } = this.state;
        return (
            <div >
                <h4 
                style={{ position: 'center', textAlign: 'center', margin: '3%' }}>Log In</h4>
                <h6 
                style={{ position: 'center', textAlign: 'center', margin: '1%', color: 'black' }}>
                <b>It is time to log your expenses</b>
                </h6>
                {this.state.error ? <h1>Try Again</h1> : null}
                <div 
                style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }} >
                    <Form 
                    onSubmit={this.handleSubmit} 
                    style={{ display: 'flex', flexDirection: 'column' }}>
                        <FormGroup style={{ float: 'center' }}>
                            <Form.Input
                                label='Username'
                                style={{ width: '30vw' }}
                                name="username"
                                placeholder="username"
                                value={fields.username}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Input
                                label='Password'
                                style={{ width: '30vw' }}
                                name="password"
                                type="password"
                                placeholder="password"
                                value={fields.password}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button
                            onSubmit={this.handleSubmit}
                            style={{ color: 'white', marginBottom: '3vw', backgroundColor:'	#E8CAC9' }}
                            type="submit"
                        >
                            ENTER YOUR EXPENSES
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;


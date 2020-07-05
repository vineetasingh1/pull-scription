import React, { Component } from 'react';
import PropTypes from 'prop-types';

 /*
const validationMethods =  {
    required : (field, value) => {
        if (!value.toString().trim().length) {
            return  `This ${field} field is required.`
        }
    },
    isEmail: (field,value) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(value) === false) {
            return  `Invalid Email Address.`
        }        
    }
} 
 
const validateForm = (form) => {
    const loginForm = document.getElementById(form)
     return loginForm.querySelectorAll('[validations]');
}
 
const runValidationRules  = (element, errors) => {
    const target = element;
    const field =  target.name;
    const value = target.value
    let validations =  element.getAttribute('validations');
    validations =  validations.split(',')
 
    for (let validation of validations) {
        validation = validation.split(':');
        const rule = validation[0];
        const error = validationMethods[rule](field, value);
        errors[field] = errors[field] || {};
        if(error) {
            errors[field][rule] = error;
        } else {
            if(_.isEmpty(errors[field])) {
                delete errors[field];
            } else {
                delete errors[field][rule];
            }
        }
    }
 
    return errors;
}
 */
 
export default class LoginForm extends React.Component {
 
    constructor(props) {

        super(props);

        this.state = {
            username: '',
            password: '',
            errors: []
        }

    }

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
        });
      };
 
    render() {
        return (
            <form onSubmit={e => this.props.handle_login(e, this.state)}>
                <h4>Log In</h4>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handle_change}
                />
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handle_change}
                />
                <input type="submit" />
            </form>
        );
    }
}

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
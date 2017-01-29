import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Render extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    getValidationState = () => {
        const length = this.state.email.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleOnSubmit = () => {
        const {onSubmit} = this.props;

        onSubmit(this.state.email, this.state.password);
    }

    render(){
        return (
            <form>
                <FormGroup
                    controlId="idEmail"
                    validationState={this.getValidationState()} >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        name="email"
                        type="email"
                        value={this.state.email}
                        placeholder="Enter your email address"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="idPassword"
                    validationState={this.getValidationState()} >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        name="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Enter your password"
                        onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                </FormGroup>
                <Button 
                    bsStyle="primary" bsSize="large" block
                    onClick={this.handleOnSubmit}>
                    Submit
                </Button>
        </form>
        );
    }
}


export default Render;

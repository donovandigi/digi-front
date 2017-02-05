import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';

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

    handleOnLogin = () => {
        const { onLogin } = this.props;
        const { email, password } = this.state;

        if(!onLogin) return;

        onLogin(email, password);
    }

    handleOnRegister = () => {
        const { onRegister } = this.props;
        const { email, password } = this.state;

        if(!onRegister) return;

        onRegister(email, password);
    }

    renderError = () => {
        const { error } = this.props;
        console.log(error);

        if(!error || error === '') return null;
        
        console.log(error);
        return (
            <Alert bsStyle="danger">
                { error }
            </Alert>
        );
    }

    render(){
        return (
            <div style={styles.formContainer} >
            <h3 style={styles.h3}>Login or register with digiloads</h3>
            { this.renderError() }
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
                <div style={styles.btnContainer}>
                    <Button
                        bsSize="large"
                        onClick={this.handleOnLogin}>
                        Login
                    </Button>
                    <Button
                        bsStyle="primary" 
                        bsSize="large" 
                        onClick={this.handleOnRegister}>
                        Register
                    </Button>
                </div>
        </form>
        </div>
        );
    }
}

const styles= {
    formContainer: {
        //width: '50%',
        border: '2px solid #000',
        padding: 20,
        borderRadius: 5
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    h3: {
        textAlign: 'center',
        marginBottom: 10
    }
}


export default Render;

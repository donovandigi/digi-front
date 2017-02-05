import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import Auth from '../Forms/Auth/Auth';


class Render extends Component{
    render(){
        const { loginUser, registerUser, error } = this.props;
        
        return (
            <div>
                <Jumbotron>
                    <h1>digiloads</h1>
                    <p>Loads, coming soon ...</p>
                </Jumbotron>
                <div style={styles.formContainer}>
                    <Auth 
                        loginUser={loginUser}
                        registerUser={registerUser}
                        error={error} />
                </div>
            </div>
        )      
    }
}

const styles = {
    formContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}

export default Render;
import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Render extends Component{
    handleOnLogout = () => {
        const { onLogout } = this.props;

        if (onLogout) logout();
    }

    render(){
        const {user, onLogout} = this.props;

        console.log(user);

        return (
            <Jumbotron>
                <h1>digiloads</h1>
                <p>Welcome to digiloads</p>
                <p><Button bsStyle="primary" onClick={onLogout}>Logout</Button></p>
            </Jumbotron>
        );
    }
}

export default Render;
import React, { Component } from 'react';

import Render from './Render';

class Auth extends Component {
    render() {
        return (
            <Render 
                onLogin={this.props.loginUser}
                onRegister={this.props.registerUser}
                error={this.props.error} />
        )
    }
}

export default Auth;
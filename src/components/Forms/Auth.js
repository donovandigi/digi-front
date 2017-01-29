import React, { Component } from 'react';

import Render from './Render';

class Auth extends Component {
    onSubmit = (email, password) => {
        const { loginUser } = this.props;

        loginUser(email, password);
    }

    render() {
        return (
            <Render onSubmit={this.onSubmit}/>
        )
    }
}

export default Auth;
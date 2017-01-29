import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import Auth from '../Forms/Auth';

import "./home.scss";


class Render extends Component{
    render(){
        const { loginUser } = this.props;
        
        return (
            <div>
                <Jumbotron>
                    <h1>digiloads</h1>
                    <p>Loads, coming soon ...</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>

                <Auth loginUser={loginUser}/>
            </div>
        )      
    }
}

export default Render;
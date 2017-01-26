import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import "./home.scss";


class Render extends Component{
    render(){
        return (
            <Jumbotron>
                <h1>digiloads</h1>
                <p>Loads, coming soon ...</p>
                <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>
        )      
    }
}

export default Render;
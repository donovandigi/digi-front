import React, { Component } from 'react';
import { Jumbotron, Button, Modal } from 'react-bootstrap';

import LoadForm from '../Forms/LoadForm/LoadForm';

class Render extends Component{
    constructor(props){
        super(props);

        this.state = {
            showLoadDetails: false
        }
    }

    handleOnAddLoadPress = () => {
        this.setState({
            showLoadDetails: true
        });
    }

    onCloseLoadDetails = () => {
        this.setState({
            showLoadDetails: false
        });
    }

    renderLoadDetailModal = () => {
        const { onSaveLoadDetails } = this.props;

        return (
            <Modal show={this.state.showLoadDetails} onHide={this.onCloseLoadDetails}>
                <Modal.Header closeButton>
                    <Modal.Title>Load Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoadForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onCloseLoadDetails}>Close</Button>
                    <Button onClick={this.onSaveLoadDetails}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    render(){
        const { user, onLogout, loads } = this.props;

        console.log(user);
        console.log(loads);

        return (
            <div>
                <Jumbotron>
                    <h1>digiloads</h1>
                    <p>Welcome to digiloads</p>
                    { this.renderLoadDetailModal() }
                    <p><Button bsStyle="primary" onClick={onLogout}>Logout</Button></p>
                    <p><Button bsStyle="primary" onClick={this.handleOnAddLoadPress}>Add Load</Button></p>
                </Jumbotron>
                <div>
                    <ul>
                        { () => loads.map(load => <div>{load.title}</div>) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Render;
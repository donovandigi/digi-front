import React from "react";
import firebase from 'firebase';

import Render from './Render';
import config from '../../../config/dev';

console.log(config);

// app component
export default class App extends React.Component {
  componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp(config.firebase);
  }

  // render
  render() {
    return (
      <Render children={this.props.children} />  
    );
  }
}

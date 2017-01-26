import React from "react";
import firebase from 'firebase';

import Render from './Render';


// app component
export default class App extends React.Component {
  componentWillMount() {
         // Initialize Firebase
        const config = {
            apiKey: "AIzaSyCLR6FVpY-ON6fnbqV8zTn7513HUi2fOVU",
            authDomain: "digi-front.firebaseapp.com",
            databaseURL: "https://digi-front.firebaseio.com",
            storageBucket: "digi-front.appspot.com",
            messagingSenderId: "780181694799"
        };

        firebase.initializeApp(config);
  }

  // render
  render() {
    return (
      <Render children={this.props.children} />  
    );
  }
}

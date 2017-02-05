import React from "react";

import Render from './Render';


// Home page component
export default class Home extends React.Component {

  // render
  render() {
    const { loginUser, registerUser, error } = this.props;

    return (
       <Render 
          loginUser={loginUser}
          registerUser={registerUser}
          error={error}/>     
    );
  }
}

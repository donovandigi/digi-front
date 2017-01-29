import React from "react";

import Render from './Render';


// Home page component
export default class Home extends React.Component {

  // render
  render() {
    console.log(this.props.user);

    const { loginUser } = this.props;

    return (
       <Render 
          loginUser={loginUser}/>     
    );
  }
}

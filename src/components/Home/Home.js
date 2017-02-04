import React from "react";

import Render from './Render';

// Home page component
export default class Home extends React.Component {
  onLogout = () => {
    const { logout } = this.props;

    if (logout) logout();
  }

  // render
  render() {
    return (
       <Render 
          user={this.props.user}
          onLogout={this.onLogout}/>
    );
  }
}

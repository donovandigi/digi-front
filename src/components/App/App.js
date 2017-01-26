import React from "react";

import Render from './Render';


// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <Render children={this.props.children} />  
    );
  }
}

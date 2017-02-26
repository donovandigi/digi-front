import React from "react";

import Render from './Render';

// Home page component
export default class Home extends React.Component {
  onLogout = () => {
    const { logout } = this.props;

    if (logout) logout();
  }

  onSaveLoadDetails = (loadDetails) => {
    const { saveLoadDetails } = this.props;

    //TODO: Retrieve this info from the form
    loadDetails = {
      title: 'My load 1',
      description: 'Load to be transported',
      type: 'No Idea',
      weight: 750,
      weightUnit: 'KG',
      price: 1500,
      priceUnit: 'R'
    };

    if (saveLoadDetails) saveLoadDetails(loadDetails);
  }

  // render
  render() {
    return (
       <Render 
          user={this.props.user}
          onLogout={this.onLogout}
          onSaveLoadDetails={this.onSaveLoadDetails}
          loads={this.props.loads}/>
    );
  }
}

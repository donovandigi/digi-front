import React, {Component} from 'react';

class Render extends Component {
    render(){
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default Render;

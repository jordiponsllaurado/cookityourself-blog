import React, { Component } from 'react';

class Meatballs extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="app">
        <p>Meatballs!!!!</p>
      </div>
    )
  }
}

export default Meatballs;

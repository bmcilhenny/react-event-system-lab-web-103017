// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  typing = () => {
    console.log('Entering password...');
  }


  render() {
    let fillerText = this.state.secondsLeft===0 ? `Boom!` : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <input type="password" onKeyUp={this.typing}/>
    )
  }
}

export default Keypad;

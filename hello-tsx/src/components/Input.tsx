import * as React from 'react';


export interface InputProps {
     name: string; 
    }

export interface InputState {
    name: string;
    firstName: string;
}

class Input extends React.Component<InputProps, InputState> {
    state = {
        name: "",
        firstName: "Laurynas"
    };

  render() {
    return (
      <div>
        <input type="text" placeholder={"Hi"} />
        <text>{this.state.name}</text>
      </div>
    );
  }
}

export default Input;
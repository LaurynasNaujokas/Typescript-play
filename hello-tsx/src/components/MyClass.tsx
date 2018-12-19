import * as React from 'react';
import Image from './cat.png';

export interface MyClassProps {
     name: string; 
    }

export interface MyClassState {
    age: number;
}

class MyClass extends React.Component<MyClassProps, MyClassState> {

    public static defaultProps: Partial<MyClassProps> = {
        name: 'Unknown'
    };

    state = {
        age: 99
    };

  render() {
    return (
      <div>
          <h1>She is  {this.props.name} {this.state.age} </h1>
          <img src={Image} />
      </div>
    );
  }
}

export default MyClass;

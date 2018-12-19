import * as React from 'react';

export interface MyClassProps {
     name: string; 
     age: number;
     password?: string;
     isMarried: boolean;
    }

class MyClass extends React.Component<MyClassProps> {
  render() {
    return (
      <div>
         <h1>{this.props.name}</h1>
         <h1>{this.props.age}</h1>
         <h1>{this.props.password}</h1>
         <h1>{this.props.isMarried} ---</h1>
      </div>
    );
  }
}

export default MyClass;

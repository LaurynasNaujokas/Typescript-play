import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClass from './components/MyClass';
import { SecondClass } from './components/SecondClass';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyClass name={'Milduti'}  />
        <SecondClass compiler={"typescript"} framework={"React"}/>
      </div>
    );
  }
}

export default App;

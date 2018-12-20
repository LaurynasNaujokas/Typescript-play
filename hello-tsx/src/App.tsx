import * as React from 'react';
import './App.css';
import MyClass from './components/MyClass';
import { SecondClass } from './components/SecondClass';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyClass name={'Milduti'}  />
        <SecondClass compiler={"typescript"} framework={"React"}/>
        <Form text="Hi" age={0}/>
      </div>
    );
  }
}

export default App;

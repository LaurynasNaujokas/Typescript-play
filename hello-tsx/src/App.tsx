import * as React from 'react';
import './App.css';
import MyClass from './components/MyClass';
import { SecondClass } from './components/SecondClass';
import Form from './components/Form';
import Input from './components/Input';



class App extends React.Component {


  handleChange(event: React.FormEvent<HTMLSelectElement>) {
    this.setState({
        name: event.target as HTMLElement,
    });
}

  render() {
    return (
      <div className="App">
        <MyClass name={'Milduti'}  />
        <SecondClass compiler={"typescript"} framework={"React"}/>
        <Form text="Hi" age={0}/>
        <Input name={""}
        //onChange = {this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;

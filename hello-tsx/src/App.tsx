import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClass from './components/MyClass';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyClass name={'Milduti'}  />
      </div>
    );
  }
}

export default App;

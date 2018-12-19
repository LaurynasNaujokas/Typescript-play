import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import MyClass from './components/MyClass';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyClass name={'Laurynas'} age={20} password={'100nu'} isMarried={true} />
      </div>
    );
  }
}

export default App;

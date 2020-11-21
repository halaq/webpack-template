import React, { Component }  from 'react';
import  { MyComponent, test } from '../src';

class App extends Component {

  componentDidMount(){
    test("hey there!!");
  }

  render() {

    return (
      <div className="App">
        <MyComponent />
      </div>
    );
  }
}

export default App;
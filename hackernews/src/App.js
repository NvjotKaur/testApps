import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    // var name="Navjot";
    // const lastName="kaur";
      // const name={
      //   firstName:"Soniya",
      //   lastName:"Kaur"
      // }
      // const name=["Apple"];
      // name.push;
    return (
      // <div className="App">
 

      //  // <h1 className="App-header"> {name.firstName} </h1>
      //  // <h1 className="App-header"> {name.lastName} </h1>
      // </div>
            <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectID}>
            ...
<span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
> Dismiss
</button>
            </span>
          </div>
)} </div>
); }
}

export default App;

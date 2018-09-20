import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Dave', age: 28},
      {name: 'Ben', age: 14},
      {name: 'Kait', age: 11},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //don't do this:
    //this.state.persons[0].name = 'David'
    //use setState to change state
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Ben', age: 14},
        {name: 'Kait', age: 11},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Dave', age: 28},
        {name: event.target.value, age: 14},
        {name: 'Kait', age: 11},
      ]
    })
  }

  render() {
    const myStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={myStyle}
          onClick={() => this.switchNameHandler('Dave!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Dave!')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

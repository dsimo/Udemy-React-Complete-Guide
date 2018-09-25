import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Dave', age: 28},
      {id: '2', name: 'Ben', age: 14},
      {id: '3', name: 'Kait', age: 11},
    ],
    otherState: 'some other value',
    showPersons: true
  }

/*   switchNameHandler = (newName) => {
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
  } */

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //creates a copy
    const persons = [...this.state.persons]; //spread operator also creates a copy
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    //find an index for the peron
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //get a copy of the person object
    const person = {
      ...this.state.persons[personIndex]
    };

    //update the name
    person.name = event.target.value;

    //get a copy of the array and place the updated person in
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //set the new state
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const myStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div>
      );
      myStyle.backgroundColor = 'red';

    };

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }



    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={myStyle}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    );
  }
}

export default App;

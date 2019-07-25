import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);

    this.state = {
      persons: [
        {id: '1', name: 'Dave', age: 28},
        {id: '2', name: 'Ben', age: 14},
        {id: '3', name: 'Kait', age: 11},
      ],
      otherState: 'some other value',
      showPersons: true
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);

  //   return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     {id: '1', name: 'Dave', age: 28},
  //     {id: '2', name: 'Ben', age: 14},
  //     {id: '3', name: 'Kait', age: 11},
  //   ],
  //   otherState: 'some other value',
  //   showPersons: true
  // }

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
    console.log('[App.js] Inside render')
    let persons = null;


    if (this.state.showPersons) {
      persons = (
            <Persons 
              persons={this.state.persons} 
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
      );
      
    };

    return (
        <div className={classes.App}>
            <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
            <Cockpit 
            appTitle = {this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
            {persons}
        </div>
    );
  }
}

export default App;

import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside constructor', props);
      }
    
      componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
      }
    
      componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
      }

      componentWillReceiveProps(nextProps) {
        console.log('[Update Persons.js] Inside componentWillRecieveProps', nextProps);
      }

      // shouldComponentUpdate(nextProps, nextState) {
      //   console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
      //   //return true;
      //   return nextProps.persons !== this.props.persons ||
      //         nextProps.changed !== this.props.changed ||
      //         nextProps.clicked !== this.props.clicked;
      // }

      componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
      }

      componentDidUpdate() {
        console.log('[Update Persons.js] Inside componentDidUpdate');
      }

    render () {
        console.log('[Persons.js] Inside render');
        return this.props.persons.map( ( person, index ) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                key={person.id}
                age={person.age} 
                changed={(event) => this.props.changed(event, person.id)} /> 
        } );
    }
} 

export default Persons;
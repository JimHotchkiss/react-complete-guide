import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'lakdjf',name: 'Max', age: 28 },
      { id: 'uriwoe', name: 'Manu', age: 29 },
      { id: 'bcnxmz', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    // this is added to our state for togglePerson
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // we'll fetch all the 'persons'
    const newPersons = [...this.state.persons];
    // at this index, personIndex, we'll replace 1
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons});
  }

  // We find the person 
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
  // We call the person, w/out mutating w/ spread operator, create new object
    const person = {...this.state.persons[personIndex]}
   // Alternative method - both are valid
   //const person =  Object.assign({}, this.state.persons[personIndex])

   // Update persons name with user input
   person.name = event.target.value;
    // Now I update the state array
    const persons = [...this.state.persons];
    persons[personIndex]=person;


    this.setState( {
      persons: persons
    } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer'
    };

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
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
          })}
        </div>
      );
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
          {persons}
      </div>
    );
  }
}

export default App;





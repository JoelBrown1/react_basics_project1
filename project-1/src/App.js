import React, {Component} from 'react';
import './App.css';

import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Joel', age: 45, hobies: 'motorcycles' },
      {name: 'Desta', age: 37},
      {name: 'Sam', age: 53},
    ],
    otherState: 'some other state',
  }

  switchNameHandler = () => {
    console.log('the handle click button was clicked');
    // manipulate state to change a person's data
    this.setState({
      persons: [
        {name: 'Joel', age: 46, hobies: 'motorcycles' },
        {name: 'Desta', age: 38},
        {name: 'Clarice', age: 22},
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick={this.switchNameHandler}>Switch names</button>
        {this.state.persons.map(p => {
          console.log('this is the person: ', p);
          return <Person name={p.name} age={p.age}> {p.hobies? p.hobies : null} </Person>
        })}
        <p>{this.state.otherState}</p>
        {/* { this.renderPeople() } */}
        {/* <Person name={'Joel'} age={45}>I like to ride motorcycles</Person>
        <Person name={'Desta'} age={37}/>
        <Person name={'Sam'} age={53}/> */}
      </div>
    );
  };
  // is the same as 
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Create Element rendered element'));
}

export default App;

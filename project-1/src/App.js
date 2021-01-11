import React from 'react';
import './App.css';

import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <h1>This is a React App</h1>
      <Person name={'Joel'} age={45}>I like to ride motorcycles</Person>
      <Person name={'Desta'} age={37}/>
      <Person name={'Sam'} age={53}/>
    </div>
  );
  // is the same as 
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Create Element rendered element'));
}

export default App;

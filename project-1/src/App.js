import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>This is a React App</h1>
  //   </div>
  // );
  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Create Element rendered element'));
}

export default App;

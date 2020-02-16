import React from 'react';
import UserList from './List.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Who's created the most issues?</h2>
        <UserList></UserList>
      </header>
    </div>
  );
}

export default App;

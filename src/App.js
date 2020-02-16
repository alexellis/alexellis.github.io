import React from 'react';
import UserList from './List.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      Where is this code hosted? On GitHub pages, as a React.js website, statically generated: <a href="https://github.com/alexellis/alexellis.github.io">github.com/alexellis/alexellis.github.io</a>
      </div>
      <div>
        <p>Where is the API sourced? The <a href="https://github.com/alexellis/leaderboard-app/tree/master/leaderboard">Leaderboard function</a> in <a href="https://github.com/alexellis/leaderboard-app">https://github.com/alexellis/leaderboard-app</a></p>
        <p>The API is hosted on <a href="https://github.com/openfaas/community-cluster/">OpenFaaS Cloud</a> and uses a CORS header.</p>
      </div>
      <header className="App-header">
        <h2>Who's created the most issues?</h2>
        <UserList></UserList>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { GetPosts } from './Components/GetPosts';
import {UserDetails} from './Components/UserDetails'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
      </header>
      <main>
        <UserDetails/>
        {/* <GetPosts/> */}
      </main>
    </div>
  );
}

export default App;

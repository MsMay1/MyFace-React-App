import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { GetPosts } from './Components/GetPosts';
import { UserDetails } from './Components/UserDetails'


function App() {
  return (
    <Router>
        <Switch>

          <Route path = "/posts" >
              <GetPosts/>
          </Route> 
          
          <Route path = "/user/:userId">
            <UserDetails/>
          </Route>

        </Switch>
      
    </Router>

  );
}

export default App;

import "./App.scss" 
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { GetPosts } from './Components/GetPosts';
import { UserDetails } from './Components/UserDetails'
import { CreateUser } from './Components/CreateUser'

function App() {
  return (
    <Router>
        <Switch>

          <Route path = "/posts" >
              <GetPosts/>
          </Route> 
          
          <Route path = "/create-user" >
              <CreateUser/>
          </Route>

          <Route path = "/users/:userId">
            <UserDetails/>
          </Route>




        </Switch>
      
    </Router>

  );
}

export default App;

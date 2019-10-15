import React from 'react';
import LoginForm from './components/login'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/privateroute'
import FriendsList from './components/friendslist'

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
          </li>
      </ul>
      <Switch>
        <PrivateRoute path='/friends' component={FriendsList} />
        <Route path ='/login' render={props => <LoginForm {...props} /> } />
        <Route component={LoginForm} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;

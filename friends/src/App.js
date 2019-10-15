import React from 'react';
import LoginForm from './components/login'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
      </ul>
      <Switch>
        <Route path ='/login' render={props => <LoginForm {...props} /> } />
        <Route component={LoginForm} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;

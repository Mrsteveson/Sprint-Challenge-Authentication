import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Jokes from './jokes/Jokes';
import Login from './authorize/Login';
import Signup from './authorize/Signup';

function App(props) {
  function logout() {
    localStorage.removeItem('token');
    props.history.push('/login')
  }

  return (
    <div className="App">
      <header className="nav">
        <NavLink to = '/login' >Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to = '/signup'>Sign Up</NavLink>
        &nbsp;|&nbsp;
        <NavLink to = '/jokes'>Jokes</NavLink>
        &nbsp;|&nbsp;
        <button onClick = {logout} >Logout</button>
      </header>
      <Route 
        exact path = '/login'
        component = {Login}
      />

      <Route 
        path = '/signup'
        component = {Signup}
      />

      <Route 
        path = '/jokes'
        component = {Jokes}
      />
    </div>
  );
}

export default withRouter(App);

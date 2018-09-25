import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './App.css';

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from './components/AuthHelperMethods';

//Our higher order component
import withAuth from './components/withAuth';

class App extends Component {

  /* Create a new instance of the 'AuthHelperMethods' compoenent*/

  Auth = new AuthHelperMethods();

  //Render the protected component
  render() {

    //let name = this.props.confirm.username;
    console.log("Rendering Appjs!")
    return (
      
      <div className="App">
        {
           this.props.history.location.pathname === "/" ? <Redirect to="/dashboard" /> : null
        }
      </div>
    );
  }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.

export default withAuth(App);


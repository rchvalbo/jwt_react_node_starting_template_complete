import React, { Component } from 'react';
import './App.css';

<<<<<<< HEAD
/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from './components/AuthHelperMethods';

//Our higher order component
import withAuth from './components/withAuth';

=======
>>>>>>> 40702bb99251b06a8010e4a0f32f7ca04bae26fa

class App extends Component {

  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
<<<<<<< HEAD
  Auth = new AuthHelperMethods();
=======
>>>>>>> 40702bb99251b06a8010e4a0f32f7ca04bae26fa

  state = {
    username: "",
    password: ""
}

/* Here will want to add a method to log the user out upon clicking 'Logout' */
  _handleLogout = () => {
<<<<<<< HEAD
    this.Auth.logout()
    this.props.history.replace('/login');
=======
    
>>>>>>> 40702bb99251b06a8010e4a0f32f7ca04bae26fa
  }

  //Render the protected component
  render() {

    let name = this.props.confirm.username;

    return (
      <div className="App">
        <div className="main-page">
          <div className="top-section">
            <h1>Welcome, {name}</h1>
          </div>
          <div className="bottom-section">
            <button onClick={this._handleLogout}>LOGOUT</button>
          </div>
        </div>
      </div>
    );
  }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
<<<<<<< HEAD
export default withAuth(App);
=======
export default App;
>>>>>>> 40702bb99251b06a8010e4a0f32f7ca04bae26fa

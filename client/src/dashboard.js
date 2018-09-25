import React, { Component } from 'react';
import AuthHelperMethods from './components/AuthHelperMethods';
import withAuth from './components/withAuth';
import './App.css';

class Dashboard extends Component {

    state = {
        username: ''
    }

    Auth = new AuthHelperMethods();

    /* Here will want to add a method to log the user out upon clicking 'Logout' */
    _handleLogout = () => {

        this.Auth.logout()
        this.props.history.replace('/login');

    }

    componentDidMount() {
        console.log("STUFFF")
        let userInfo = this.Auth.getConfirm();
        this.setState({
            username: userInfo.username
        })
    }
    //Render the protected component
    render() {

        

        return (
            <div className="App">
                <div className="main-page">
                    <div className="top-section">
                        <h1>Welcome, {this.state.username}</h1>
                    </div>
                    <div className="bottom-section">
                        <button onClick={this._handleLogout}>LOGOUT</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAuth(Dashboard);

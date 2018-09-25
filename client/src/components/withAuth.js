import React, { Component } from 'react';
import AuthHelperMethods from './AuthHelperMethods';

/* A higher order component is frequently written as a function that returns a class. */
export default function withAuth(AuthComponent) {
    
    const Auth = new AuthHelperMethods();

    return class AuthWrapped extends Component {
       
        state = {
            confirm: null,
            loaded: false
        }

        /* In the componentDid<ount, we would want to do a couple of important tasks in order to verify the current users authentication status
        prior to granting them enterance into the app. */
        componentWillMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/login')
            }
            else {
                /* Try to get confirmation message from the Auth helper. */
                try {
                    
                    const confirm = Auth.getConfirm()
                    console.log("confirmation is:", confirm);
                    this.setState({
                        confirm: confirm,
                        loaded: true
                    })
                }
                /* Oh snap! Looks like there's an error so we'll print it out and log the user out for security reasons. */
                catch (err) {
                    console.log(err);
                    Auth.logout()
                    this.props.history.replace('/login');
                }
            }
        }

        render() {
            if (this.state.loaded == true) {
                if (this.state.confirm) {
                    console.log("confirmed!")
                    return (
                        /* component that is currently being wrapper(App.js) */
                        <AuthComponent history={this.props.history} confirm={this.state.confirm} />
                    )
                }
                else {
                    console.log("not confirmed!")
                    return null
                }
            }
            else {
                return null
            }

        }
    }
}
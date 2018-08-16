import React, {Component} from "react";
<<<<<<< HEAD
import AuthHelperMethods from './components/AuthHelperMethods';
=======

>>>>>>> 40702bb99251b06a8010e4a0f32f7ca04bae26fa
import './login.css'
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Signup extends Component {
    
<<<<<<< HEAD
    Auth = new AuthHelperMethods();
=======
    
>>>>>>> 40702bb99251b06a8010e4a0f32f7ca04bae26fa
    state = {
        username: "",
        password: ""
    }

    _handleChange = (e) => {
        
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )

        console.log(this.state);
    }

    handleFormSubmit = (e) => {

        e.preventDefault();
        
<<<<<<< HEAD
        axios.post("/signup", {
                username: this.state.username,
                password: this.state.password
            }).then((data) => {
                console.log(data);
                this.props.history.replace('/login');
            })
=======
        
>>>>>>> 40702bb99251b06a8010e4a0f32f7ca04bae26fa
        
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-wrapper">
                    <div className="box">
                        <div className="box-header">
                            <h1>Signup</h1>
                        </div>
                        <form className="box-form">
                            <input
                                className="form-item"
                                placeholder="Username"
                                name="username"
                                type="text"
                                onChange={this._handleChange}
                            />
                            <input
                                className="form-item"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={this._handleChange}
                            />
                            <button className="form-submit" onClick={this.handleFormSubmit}>Signup</button>
                        </form>
                        <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link>
                    </div>
                    <div className="signiture">
                        <h1>Template Built & Designed by Roman Chvalbo</h1>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }

}
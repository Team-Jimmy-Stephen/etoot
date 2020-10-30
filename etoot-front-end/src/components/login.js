<<<<<<< HEAD
import React, {Component} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

export default class CreateAppointment extends Component{
    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword= this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            password: '',
        }
    }


    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    

    onSubmit(e){
        e.preventDefault();
        const user = {
            username : this.state.username,
            password: this.state.password,
        }

        console.log(user)
        axios.post('http://localhost:8080/login', user)
        .then(res => console.log(res.data))

        window.location = "/";
    }


render(){
    return(
        <div className="container">
            <h3> Create New Account</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                     <input type="text" required className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername} />

                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" required className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword} />
                </div>

                
                <div className="form-group">
                    <input type="submit" value="Schedule Appointment" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )}
}
=======
import React, {Component, useState} from 'react'
import './login.css'

export default class Login extends Component{
    render(){
        return(
            <div className="login">
                <img 
                    className="login__logo"
                    src="https://i.ibb.co/dGhtVsZ/Etoot-logo.jpg"
                />

                <div className='login__container'>
                    <h1>Sign-in</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' />

                        <h5>Password</h5>
                        <input type='password'/>

                        <button type='submit' className='login__signInButton'>Sign In</button>
                    </form>

                    <p>
                        By signing-in you agree to the Etoot Conditions of Use.
                    </p>

                    <button className='login__registerButton' >Create your Etoot Account</button>
                </div> 
            </div>
        )
    }
}
>>>>>>> 11533dbbfe7b677e7c9d661cd4824a245c860602

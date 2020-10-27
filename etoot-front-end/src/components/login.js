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

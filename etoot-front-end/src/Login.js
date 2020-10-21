import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='login'>
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://i.ibb.co/dGhtVsZ/Etoot-logo.jpg"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

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

export default Login
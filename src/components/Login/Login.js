import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Signup from '../Signup/Signup';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error,setError]=useState('')

    const navigate = useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || "/"

    const [signInWithEmailAndPassword, user, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from,{replace:true});

    }
    const handleUserSignIn = (event) => {
        event.preventDefault();
        // if(email){
        //     setError('Use valid email');
        // }
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-form'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleUserSignIn}>

                {
                    error && <p style={{ color: 'red' }}>Enter valid email and password</p>
                }
                <div className='input-group'>
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmailBlur} type={"email"} name='email' required></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePasswordBlur} type={"password"} name='password' required></input>
                    {
                        loading && <p className='loading'>loading...</p>
                    }
                </div>
                <div className='form-submit'>

                    <input className='form-submit' type={"submit"} name='submit' value={"Login"}></input>
                </div>
            </form>
            <p >New to Ema-jhon?<Link className='form-link' to={"/Signup"}>Create New Account</Link></p>
            <div className='from-line'>
                <div className='left-line'>
                    <h6> <hr></hr></h6>

                </div>
                <div>
                    <p>or</p>

                </div>
                <div className='right-line'>
                    <h6><hr></hr></h6>
                </div>
            </div>
            <div className='form-button'>

                <button className='google-button'> Continue with Google</button>

            </div>
        </div>

    );
};

export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const navigate=useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if(user){
      navigate('/shop');

    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setError('password will de 6 character or long');
            return;
        }
        if (password != confirmPassword) {
            setError('Two password are not match');
            return;
        }
        createUserWithEmailAndPassword(email, password);



    }




    return (
        <div className='login-form'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleCreateUser}>

                <div className='input-group'>
                    <p style={{ color: 'red' }}>{error}</p>
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmailBlur} type={"email"} name='email' required></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePasswordBlur} type={"password"} name='password' required></input>
                </div>

                <div className='input-group'>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type={"password"} name={"confirm-password"} required></input>
                </div>

                <div className='form-submit'>

                    <input className='form-submit' type={"submit"} name='submit' value={"Sign Up"}></input>
                </div>
            </form>
            <p >Already have a account?<Link className='form-link' to={"/login"}>Login</Link></p>
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

export default Signup;
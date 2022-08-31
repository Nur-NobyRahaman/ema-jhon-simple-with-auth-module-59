import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setConfirmPassword] = useState('')
    const [error, setError] = useState('');

    const handleNameBlur = (event) => {
        setEmail(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }
    const handlePhonedBlur = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping= {name,email,address,phone};
        console.log(shipping);
        

    }
    return (
        <div className='login-form'>
            <h1 className='form-title'>Shipping Information</h1>
            <form onSubmit={handleCreateUser}>

                <div className='input-group'>
                    
                    <label htmlFor='Your-name'>Your name</label>
                    <input onBlur={handleNameBlur} type={"text"} name='Your-name' required></input>
                </div>
                <div className='input-group'>
                    
                    <label htmlFor='email'> Your Email</label>
                    <input value={user?.email} readOnly type={"email"} name='email' required></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='Address'>Address</label>
                    <input onBlur={handleAddressBlur} type={"text"} name='Address' required></input>
                </div>

                <div className='input-group'>
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input onBlur={handlePhonedBlur} type={"text"} name={"phone-number"} required></input>
                </div>

                <div className='form-submit'>

                    <input className='form-submit' type={"submit"} name='submit' value={"Add Shipping"}></input>
                </div>
            </form>

        </div>
    );
};

export default Shipment;
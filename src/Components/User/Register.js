import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Social from './Social'

const Register = () => {
    return (
        <div className='flex user items-center justify-center'>
            <div className='login-form border px-7 py-6'>
                <h1 className='text-4xl font-bold mb-5'>Register</h1>
                <p>
                    Alrady have an account? Please
                    <Link className='btn btn-link btn-primary' to={'/login'}>Login!</Link>
                </p>
                <TextField
                    style={{ width: '100%', marginTop: '30px' }}
                    required
                    id="outlined-required"
                    label="Email"
                    type={'email'}
                />
                <TextField
                    style={{ width: '100%', marginTop: '30px' }}
                    required
                    id="outlined-required"
                    label="Password"
                    type={'password'}
                />
                <button className='w-full btn btn-primary text-white px-10 mt-6'>Register</button>
                <Social />
            </div>
        </div>
    )
}

export default Register
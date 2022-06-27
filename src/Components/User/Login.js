import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import Social from './Social'
const Login = () => {
    return (
        <div className='flex user items-center justify-center'>
            <div className='login-form border px-7 py-6'>
                <h1 className='text-4xl font-bold mb-5'>Login</h1>
                <p>Don't have an account? Please <Link className='btn btn-link btn-primary' to={'/register'}>Register</Link></p>
                <form >
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
                    <button className='w-full btn btn-primary text-white px-10 mt-6'>Login</button>
                </form>
                <button className=' mt-5 btn-primary font-normal btn-link'>Forngot your password?</button>
                <Social />
            </div>
        </div>
    )
}

export default Login
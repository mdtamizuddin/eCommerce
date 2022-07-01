import { TextField } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../Firebase/firebase.init'
import './Contact.css'
import Social from './Social'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                fetch(`https://dandabazz.onrender.com/users/${data.email}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: user.email,
                        user: user
                    })
                })
                    .then(res => {
                        setLoading(false)
                        if (res.status === 200) {
                            navigate('/')
                        }
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            });

    }
    return (
        <div className='flex user items-center justify-center'>
            <div className='login-form border px-7 py-6'>
                <h1 className='text-4xl font-bold mb-5'>Login</h1>
                <p>Don't have an account? Please <Link className='btn btn-link btn-primary' to={'/register'}>Register</Link></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("email", { required: true })}
                        style={{ width: '100%', marginTop: '30px' }}
                        required
                        label="Email"
                        type={'email'}
                    />
                    <TextField
                        {...register("password", { required: true })}
                        style={{ width: '100%', marginTop: '30px' }}
                        required
                        label="Password"
                        type={'password'}
                    />
                    <button className='w-full btn btn-primary text-white px-10 mt-6'>Login</button>
                </form>
                <button className={` mt-5 btn-primary font-normal btn-link ${loading && 'loading'}`}>Forngot your password?</button>
                <Social />
            </div>
        </div>
    )
}

export default Login
import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Social from './Social'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.init'
import { useState } from 'react'



const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setLoading(true)
        const email = data.email
        const password = data.password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)

                if (user) {
                    updateUserProfile(data, user)
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                setLoading(false)
            });
    }
    const updateUserProfile = (data, user) => {

        updateProfile(auth.currentUser, {
            displayName: data.displayName
        }).then(() => {
            fetch(`https://dandabazz.onrender.com/users/${data.email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    user: user
                })
            })
                .then(res => {
                    setLoading(false)
                    if (res.status === 200) {
                        navigate('/')
                    }
                })
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className='flex user items-center justify-center'>
            <div className='login-form border px-7 py-6'>
                <h1 className='text-4xl font-bold mb-5'>Register</h1>
                <p>
                    Alrady have an account? Please
                    <Link className='btn btn-link btn-primary' to={'/login'}>Login!</Link>
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("displayName", { required: true })}
                        style={{ width: '100%', marginTop: '30px' }}
                        required
                        label="Name"
                        type={'text'}
                    />
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
                        label="Password"
                        type={'password'}
                    />
                    <button className={`w-full btn btn-primary text-white px-10 mt-6 ${loading && "loading"}`}>Register</button>
                </form>
                <Social />
            </div>
        </div>
    )
}

export default Register
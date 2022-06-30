import { Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [rate, setrate] = useState(2)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        toast.success('Thanks For Your Review Your Review is Added')
        console.log(data)
    }


    return (
        <form className='lg:w-5/6 shadow-lg px-4 py-5' onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-bold">Add Your Review</h1>
            <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Aspernatur, nesciunt.</p>
            <TextField className={`w-full`}
                {...register("name", { required: true })}
                style={{
                    marginTop: '20px',
                }}
                id="outlined-basic"
                label="Name"
                variant="outlined"

            />
            <p className='text-error text-sm mt-2'>{errors.name?.type === 'required' && "Please Insert your name here"}</p>

            <TextField className='w-full'
                {...register("email", { required: true })}
                style={{ marginTop: '20px' }}
                id="outlined-basic"
                label="Email"
                variant="outlined"

            />
            <p className='text-error text-sm mt-2'>{errors.email?.type === 'required' && "Insert Your Email"}</p>
            <TextField className='w-full'
                {...register("review", { required: true })}
                id="outlined-multiline-static"
                style={{ marginTop: '20px' }}
                label="Review"
                multiline
                rows={4}
            />
            <p className='text-error text-sm mt-2'>{errors.review?.type === 'required' && "Some Review"}</p>
            <h1 className='flex mt-4'>
                Rating
                <Rating
                    style={{ marginLeft: '10px', color: '#f43f5e' }}
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                        setrate(newValue);
                    }}
                />
            </h1>
            <p className='text-error text-sm mt-2'>{!rate && "Give A valuable Ratings"}</p>
            <button type='submit' className='btn btn-primary btn-md px-10 mt-5'>Submit</button>
        </form>
    )
}

export default AddReview
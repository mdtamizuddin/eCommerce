import { Rating } from '@mui/material'
import React from 'react'

const ReviewCard = ({ data }) => {
    return (

        <div className='mt-4 p-2'>
            <div className='flex items-center'>
                <div className='avatar'>
                    <div className="w-16 rounded">
                        <img src="https://www.pngfind.com/pngs/m/341-3416003_no-avatar-pic-unknown-person-png-transparent-png.png" alt='' />
                    </div>
                </div>
                <div className='ml-3'>
                    <h2 className='font-bold'>{data.name}</h2>
                    <h3 className='flex items-center'>
                        <span className='text-primary mr-3'>5.0</span>
                        <Rating name="size-small" size="small" value={data.rating} />
                        <p className='ml-2'>{data.date}</p>
                    </h3>
                </div>
            </div>
            <p className='text-sm mt-4'>{data.review}</p>

        </div>
    )
}

export default ReviewCard
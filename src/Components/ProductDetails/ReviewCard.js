import { Rating } from '@mui/material'
import React from 'react'

const ReviewCard = ({ desc }) => {
    return (

        <div className='mt-4 p-2'>
            <div className='flex items-center'>
                <div className='avatar'>
                    <div className="w-16 rounded">
                        <img src="https://api.lorem.space/image/face?hash=92048" alt='' />
                    </div>
                </div>
                <div className='ml-3'>
                    <h2 className='font-bold'>Jete Review Dibo Heter Name</h2>
                    <h3 className='flex items-center'>
                        <span className='text-primary mr-3'>5.0</span>
                        <Rating name="size-small" size="small" value={5} />
                        <p className='ml-2'>29 June</p>
                    </h3>
                </div>
            </div>
            <p className='text-sm mt-4'>{desc}</p>

        </div>
    )
}

export default ReviewCard
import React from 'react'

const Social = () => {
    return (
        <div className='flex w-full py-4 mt-4 justify-center'>
            <div>
                <span className='text-2xl font-bold'>Continue With</span>
                <i className="fa-brands text-xl text-primary hover:text-secondary font-normal ml-4 fa-google"></i>
                <i className="fa-brands text-xl text-primary hover:text-secondary font-normal ml-4 fa-facebook-square"></i>
                <i className="fa-brands text-xl text-primary hover:text-secondary font-normal ml-4 fa-github"></i>
            </div>
        </div>
    )
}

export default Social
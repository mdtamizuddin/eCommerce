import React from 'react'

const TeamCard = ({ image , name }) => {
    return (
        <div className='overflow-hidden p-4 h-auto w-full'>
            <div className='w-full h-80 bg-gray-300 rounded-2xl overflow-hidden'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    
                }}
                alt="" />
            <div className='lg:h-28 h-32 w-full shadow rounded-2xl flex items-center justify-center flex-col'>
                <h1 className='text-2xl'>{name}</h1>
                <h3 className='text-gray-600 mt-1'>Team Mamber</h3>
            </div>
        </div>
    )
}

export default TeamCard
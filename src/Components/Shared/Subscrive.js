import React from 'react'
import NewsLatter from '../Home/images/Newsletter.svg'
const Subscrive = () => {
    return (
        <div className='py-10 my-20 bg-primary w-full flex items-center'>
            <div className='flex h-full items-center container mx-auto justify-between'>
                <div className='flex items-center'>
                    <img style={{ height: '80%' }} src={NewsLatter} alt="" />
                    <div className='ml-4'>
                        <h1 className='text-4xl font-bold text-white'>Join our newsletter now!</h1>
                        <p className='text-gray-200 mt-2'>Register now and get our latest updaye and promos</p>
                    </div>
                </div>

                {/* left Side End  */}
                <div >
                    <input type="text" placeholder="Enter You Email" className="input  rounded-none rounded-tl-lg rounded-bl-lg   w-96" />
                    <button className='btn rounded-none rounded-tr-lg rounded-br-lg'>Join</button>
                </div>

            </div>
        </div>
    )
}

export default Subscrive
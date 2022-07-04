import React from 'react'
import NewsLatter from '../Home/images/Newsletter.svg'
const Subscrive = () => {
    return (
        <div className='py-10 my-20 bg-primary w-full flex items-center'>
            <div className='flex flex-col lg:flex-row h-full items-center container mx-auto justify-between'>
                <div className='flex items-start'>
                    <img className='lg:w-20 w-16 ' src={NewsLatter} alt="" />
                    <div className='ml-4'>
                        <h1 className='lg:text-4xl text-2xl font-bold text-white'>Join our newsletter now!</h1>
                        <p className='text-gray-200 mt-2'>Register now and get our latest updaye and promos</p>
                    </div>
                </div>

                {/* left Side End  */}
                <div className='mt-6 w-full flex justify-center lg:justify-end'>
                    <input type="text" placeholder="Enter You Email" className="input  rounded-none rounded-tl-lg rounded-bl-lg  lg:w-96" />
                    <button className='btn rounded-none rounded-tr-lg rounded-br-lg'>Join</button>
                </div>

            </div>
        </div>
    )
}

export default Subscrive
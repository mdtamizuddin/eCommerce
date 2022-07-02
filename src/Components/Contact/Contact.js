import React from 'react'

const Contact = () => {
    return (
        <main className='container mx-auto py-16'>

            <section className='lg:flex mt-5 items-end justify-between'>
                <div className='lg:w-[50%] lg:px-5'>
                    <h1 className='text-3xl font-bold'>Conatct Us</h1>
                    <p className='text-sm leading-5 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum earum commodi a in <br /> assumenda enim impedit consectetur error minus blanditiis!.sit amet consectetur <br /> adipisicing elit. Nostrum earum commodi a in </p>
                    <div className='shadow-xl h-auto w-full mt-8 px-2 lg:pl-3 lg:pr-5 py-5 rounded-xl'>

                        <label class="label">
                            <span class="label-text">Name*</span>
                        </label>
                        <input type="text" class="input input-bordered w-full " />
                        <label class="label mt-4">
                            <span class="label-text">Email*</span>
                        </label>
                        <input type="email" class="input input-bordered w-full " />
                        <label class="label mt-4">
                            <span class="label-text">Subject*</span>
                        </label>
                        <textarea type="text" class="input h-28 input-bordered w-full " />

                        <div className='flex justify-between mt-5'>
                            <label class="label cursor-pointer">
                                <input type="checkbox" class="checkbox  checkbox-primary" />
                                <span class="label-text ml-3">Accept Term & Condition</span>
                            </label>
                            <button className='btn btn-primary text-white'>Submit</button>
                        </div>
                    </div>
                </div>
                <div
                    className='lg:w-[40%] mt-5 lg:mt-0 p-5 bg-primary flex flex-col justify-between shadow-xl rounded-xl h-96'
                >
                    <div>
                        <h1 className='text-3xl font-bold '>Contact</h1>
                        <p className='mt-5 flex items-start'>
                            <i class="fa-solid mt-1 fa-location-dot"></i>
                            <span className='text-sm ml-2'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Hic voluptatibus perspiciatis <br /> soluta animi recusandae.</span>
                        </p>
                        <p className='mt-3'>
                            <i class="fa-solid  fa-phone"></i>
                            <span className='text-sm ml-2'>+1234567890</span>
                        </p>
                        <p className='mt-3'>
                            <i class="fa-solid fa-envelope"></i>
                            <span className='text-sm ml-2'>
                                example@gmail.com
                            </span>
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mb-3'>Follow Us</h2>
                        <span>
                            <i class="fa-brands text-3xl mr-4 fa-facebook"></i>
                            <i class="fa-brands text-3xl mr-4 fa-instagram"></i>
                            <i class="fa-brands text-3xl mr-4 fa-linkedin"></i>
                        </span>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Contact
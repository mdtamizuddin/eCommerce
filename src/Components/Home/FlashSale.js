import React, { useState } from 'react'
import FlashSaleCard from '../Shared/FlashSaleCard';

const FlashSale = () => {
    const [time, setTime] = useState(59)
    setTimeout(() => {
        if (time === 0) {
            setTime(59)
        }
        else {
            setTime(time - 1)
        }
    }, 1000);
    return (
        <main className='bg-[#FAF3F2] my-24 py-14 w-full'>
            <section className='container mx-auto flex'>
                <div className='w-72'>
                    <h1 className='text-4xl font-bold'>Flash Sale</h1>
                    <h2 className='text-xl my-3'>Sale End In:</h2>
                    <div className='flex w-full justify-between mt-5'>
                        <div className='text-primary px-6 border-2 border-gray-500 rounded-lg py-1 flex items-center flex-col'>
                            <h3 className='text-3xl'>1</h3>
                            <span>Hrs</span>
                        </div>
                        <div className='text-primary px-6 border-2 border-gray-500 rounded-lg py-1 flex items-center flex-col'>
                            <h3 className='text-3xl'>10</h3>
                            <span>Min</span>
                        </div>
                        <div className='text-primary px-6 border-2 border-gray-500 rounded-lg py-1 flex items-center flex-col'>
                            <h3 className='text-3xl'>{time}</h3>
                            <span>Sec</span>
                        </div>
                    </div>
                    {/* end Times  */}
                    <h1 className='text-2xl mt-10 font-bold'>
                        Everyday discount up to 30% Off!
                    </h1>
                    <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <button className='btn btn-primary text-white mt-4 px-7'>
                        Shop Now
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-6 ml-6'>
                    <FlashSaleCard />
                    <FlashSaleCard />
                    <FlashSaleCard />
                </div>
            </section>
        </main>
    )
}

export default FlashSale
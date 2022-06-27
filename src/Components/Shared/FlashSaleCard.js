import React from 'react'

const FlashSaleCard = () => {
    return (
        <div style={{ height: 'auto' }} className="card product-card bg-base-100 border items-center p-4">
            <figure className='p-7 border h-44 w-44 lg:w-60 lg:h-60 rounded-2xl'>
                <img className='w-full h-full ' src="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjEwU3NKNWFBUUwuX1NMMTM5M18uanBn.jpg" alt="Shoes" />
            </figure>
            <div className="card-body md:w-full md:px-0 items-center">
                <h2 className="lg:text-xl  font-bold text-center">PlayStation PULSE 3D Wireless Headset</h2>
                <p className='font-bold text-primary'>
                    <span className='line-through text-gray-400'>$500.00</span>
                    <span className='ml-4'>$500.00</span>
                </p>
                <div className='w-10/12'>
                    <p className='flex justify-between'>
                        <span>Available: 20</span>
                        <span>Sold: 60</span>
                    </p>
                    <progress className="progress progress-primary w-full" value="40" max="100"></progress>
                </div>
            </div>
        </div>

    )
}

export default FlashSaleCard
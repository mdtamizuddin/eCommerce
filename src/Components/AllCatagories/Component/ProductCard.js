import React from 'react'

const ProductCard = () => {
    return (
        <div className="card product-card bg-base-100 border items-center p-4">
            <figure className='p-7 border h-44 w-44 lg:w-60 lg:h-60 rounded-2xl'>
                <img className='w-full h-full ' src="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjEwU3NKNWFBUUwuX1NMMTM5M18uanBn.jpg" alt="Shoes" />
            </figure>
            <div className="card-body md:w-full md:px-0 items-center">
                <h2 className="lg:text-xl  font-bold text-center">PlayStation PULSE 3D Wireless Headset</h2>
                <p className='font-bold text-primary'>$500.00</p>
                <p className=''>
                    <i className="fa-solid text-[#FFD687] fa-star"></i>
                    <span className='text-neutral ml-2'>5.0</span>
                    <span className='text-accent px-2'>|</span>
                    <span className='text-neutral'>Sold 102</span>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
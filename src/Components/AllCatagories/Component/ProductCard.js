import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = ({ hidden, height }) => {
    const navigate = useNavigate()
    function scrollFunction() {
        document.documentElement.scrollTop = 0
        navigate('/products/details')
      }
    return (
        <div onClick={scrollFunction} style={{ height: height }} className="card product-card cursor-pointer bg-base-100 border items-center p-4">
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
                {
                    !hidden &&
                    <div className="card-actions justify-end">
                        <Link onClick={()=> scrollFunction()} to={`/products/${'45454'}`} className="btn btn-primary text-white">Buy Now</Link>
                    </div>
                }
            </div>
        </div>

    )
}

export default ProductCard
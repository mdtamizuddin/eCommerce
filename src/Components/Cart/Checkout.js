import React from 'react'
import { useQuery } from 'react-query'
import { Link, NavLink, useParams } from 'react-router-dom'
import Loading from '../Shared/Loading/Loading'

const Checkout = () => {
    const { id } = useParams()
    const url = `https://dandabazz.onrender.com/orders/${id}`
    const { isLoading, data } = useQuery(['checkout'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    const shipping = 10
    const tax = 5
    if (isLoading) {
        return <Loading />
    }
    return (
        <main className='container mx-auto'>
            <Navigate />
            <section className='lg:flex  justify-between  mt-8'>
                <div className='lg:w-[68%] p-5 shadow-2xl rounded-xl'>
                    <h4 className='text-xl mt-5'>Buyer Info</h4>
                    <span className='divider'></span>

                    <form className='form-control'>
                        <div className='grid w-full grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10'>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">First Name</span>
                                </label>
                                <input type="text" class="input input-bordered w-full " />
                            </div>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">Last Name</span>
                                </label>
                                <input type="text" class="input input-bordered w-full " />
                            </div>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">Adress</span>
                                </label>
                                <input type="text" class="input input-bordered w-full " />
                            </div>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">Contact</span>
                                </label>
                                <input type="text" class="input input-bordered w-full " />
                            </div>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">Country</span>
                                </label>
                                <input type="text" class="input input-bordered w-full " />
                            </div>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">City</span>
                                </label>
                                <input type="text" class="input input-bordered w-full " />
                            </div>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">State</span>
                                </label>
                                <input type="text" class="input input-bordered w-full " />
                            </div>
                            <div class=" w-full ">
                                <label class="label">
                                    <span class="label-text">Zip Code</span>
                                </label>
                                <input type="number" class="input input-bordered w-full " />
                            </div>

                        </div>
                        <div class=" w-full grid-rows-6">
                            <label class="label">
                                <span class="label-text">Note</span>
                            </label>
                            <textarea type="text" class="input h-24 input-bordered w-full " />
                        </div>
                    </form>
                </div>
                <div className='lg:w-[30%] p-6 mt-7 lg:mt-0  shadow-2xl rounded-xl'>
                    <h2 className='text-xl text-center py-3 font-semibold'>Your Order Summary</h2>

                    <h5 className='mt-5 text-left'>
                        <span>Name: {data.product.name.slice(0, 60)}{data.product.name.length > 60 && '****'}</span>
                    </h5>
                    <h1 className='flex justify-between mt-5 text-primary font-semibold'>
                        <span className='text-black'>Quantity: {data.product.quantity}</span>
                        <span>Price: {data.product.price}</span>
                    </h1>
                    <span className='divider'></span>
                    <h1 className='flex justify-between mt-5 text-primary font-semibold'>
                        <span className='text-black'>Shipping:</span>
                        <span>${shipping}</span>
                    </h1>
                    <h1 className='flex justify-between mt-5 text-primary font-semibold'>
                        <span className='text-black'>Tax:</span>
                        <span>${tax}</span>
                    </h1>

                    <span className='divider'></span>
                    <h1 className='flex justify-between mt-5 text-xl text-primary font-semibold'>
                        <span className='text-black '>Total:</span>
                        <span>${tax + shipping + data.product.price}</span>
                    </h1>
                    <span className='divider'></span>
                    <h1 className="text-xl">Payment</h1>
                    <div className='mt-8 flex flex-col lg:flex-row justify-between'>
                        <button className="btn-sm btn mt-3 lg:mt-0 hover:btn-primary font-normal">Credit Card</button>
                        <button className="btn-sm btn mt-3 lg:mt-0 hover:btn-primary font-normal">Bank Transfer</button>
                        <button className="btn-sm btn mt-3 lg:mt-0 hover:btn-primary font-normal">Paypal</button>
                    </div>
                    <button className='w-full btn-primary btn mt-10'>Checkout</button>
                    <Link className='w-full btn btn-link mt-5' to={'/cart'}>Back To Cart</Link>
                </div>
            </section>
        </main>
    )
}

export default Checkout



function Navigate() {
    return (
        <main className='container mx-auto p-4 text-xl'>
            <div className=" breadcrumbs">
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-primary'} to={'/checkout'}>Checkout</NavLink>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto mt-5">
                <h1 className="text-4xl text-center font-semibold">Checkout</h1>
                <div className="flex flex-row w-full justify-center items-center mt-5">
                    <div className="flex items-center">
                        <span className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm lg:text-xl mr-2'>1</span>
                        <span className='mx-3 text-sm lg:text-xl text-primary'>My Cart</span>
                    </div>
                    <div className="divider lg:w-40 w-20 mt-5 mx-5"></div>
                    <div className="flex items-center">
                        <span className='w-10  h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm lg:text-xl mr-2'>2</span>
                        <span className='mx-3 text-primary text-sm lg:text-xl'>CheckOut</span>
                    </div>
                </div>
            </div>

        </main>
    )
}
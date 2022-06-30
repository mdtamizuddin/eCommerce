import React from 'react'
import { useQuery } from 'react-query'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const url = 'https://dandabazz.onrender.com/orders'
    const { isLoading, data } = useQuery(['orders'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <h1>loading...</h1>
    }
    return (
        <div>
            <Navigate />
        </div>
    )
}

export default Cart

function Navigate(params) {
    return (
        <main className='container mx-auto p-4 text-xl'>
            <div className=" breadcrumbs">
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-primary'} to={'/cart'}>Cart</NavLink>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto mt-5">
                <h1 className="text-4xl text-center font-semibold">My Cart</h1>
                <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-5">
                    <div className="flex items-center">
                        <span className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mr-2'>1</span>
                        <span className='mx-3 text-xl text-primary'>My Cart</span>
                    </div>
                    <div class="divider lg:w-40 w-full mt-5 mx-5"></div>
                    <div className="flex items-center">
                        <span className='w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-xl mr-2'>2</span>
                        <span className='mx-3 text-xl text-gray-500'>CheckOut</span>
                    </div>
                </div>
            </div>
            <section>

            </section>
        </main>
    )
}
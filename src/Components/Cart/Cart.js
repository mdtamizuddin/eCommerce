import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, NavLink } from 'react-router-dom'

const Cart = () => {
    const [productS, setProduct] = useState({})
    const [checked, setChecked] = useState('')
    const url = 'https://dandabazz.onrender.com/orders'
    const { isLoading, data, refetch } = useQuery(['orders'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    function deleteProduct(id) {
        fetch(`https://dandabazz.onrender.com/orders/${id}`, {
            method: "delete"
        }).then(res => {
            res.status === 200 && refetch()
        })
    }

    if (isLoading) {
        return <h1>loading...</h1>
    }
    else if (data.length < 1) {
        return <h1 className='text-4xl font-bold py-10 text-center'>No Order</h1>
    }
    return (
        <div>
            <Navigate />


            <section className='mt-10 container mx-auto flex flex-col-reverse lg:flex-row justify-between '>
                <div className="overflow-x-auto w-full p-5 lg:w-[60%]">
                    <table className="table w-full">
                        {/* head */}
                        <tbody>
                            {/* row 1 */}
                            {
                                data?.map((product) => <tr

                                    key={product._id}

                                >
                                    <td>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <input type="checkbox"
                                                    onClick={() => {
                                                        setProduct(product)
                                                        setChecked(product._id)
                                                    }}
                                                    onChange={() => ''}
                                                    className="checkbox checkbox-primary"
                                                    checked={checked === product._id}
                                                />
                                            </label>
                                        </div>

                                    </td>
                                    <td
                                        onClick={() => {
                                            setProduct(product)
                                            setChecked(product._id)
                                        }}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask w-28 border h-28">
                                                    <img src={product.product.images[0]} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product?.product?.name?.slice(0, 30)}...</div>
                                                <p className='text-primary font-bold mt-2'>price: ${product?.product?.price}</p>
                                                <p className='text-primary font-bold mt-2'>Quantity: {product?.product?.quantity}</p>
                                            </div>

                                        </div>

                                    </td>
                                    <td>
                                        <button onClick={() => deleteProduct(product._id)} className='btn btn-error'>Delete</button>
                                    </td>


                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                <div className='lg:w-[30%] w-full mt-5 p-5 shadow-2xl rounded-lg h-72'>
                    {
                        productS.product ?
                            <>
                                <h2 className='text-xl'>Summary</h2>
                                <h3 className='flex justify-between mt-5'>Total : <span className='text-primary font-bold'>${productS?.product?.price}</span></h3>
                                <h3 className='flex justify-between mt-5'>Quantity : <span className='text-primary font-bold'>{productS?.product?.quantity}</span></h3>
                                <Link to={'/checkout'} className='btn btn-primary w-full mt-10'>CheckOut</Link>
                            </>
                            :
                            <div className='flex justify-center items-center h-full w-full text-2xl font-bold'>
                                Select a Product
                            </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default Cart

function Navigate() {
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
                <div className="flex flex-row w-full justify-center items-center mt-5">
                    <div className="flex items-center">
                        <span className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm lg:text-xl mr-2'>1</span>
                        <span className='mx-3 text-sm lg:text-xl text-primary'>My Cart</span>
                    </div>
                    <div className="divider lg:w-40 w-20 mt-5 mx-5"></div>
                    <div className="flex items-center">
                        <span className='w-10  h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm lg:text-xl mr-2'>2</span>
                        <span className='mx-3 text-gray-500 text-sm lg:text-xl'>CheckOut</span>
                    </div>
                </div>
            </div>

        </main>
    )
}
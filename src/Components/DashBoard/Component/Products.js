import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading'

const Products = () => {
    const url = 'https://dandabazz.onrender.com/products'
    const { isLoading, data } = useQuery(['Products'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className="text-center text-4xl pb-5">All products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th />
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Review</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td >
                                    <div className="avatar">
                                        <div className="w-28 rounded border">
                                            <img src={product.product.images[0]} />
                                        </div>
                                    </div>
                                </td>
                                <td className='text-md'>{product.product.name.slice(0, 30)}..</td>
                                <td>${product.product.price}</td>
                                <td>{product.product.sold}p</td>
                                <td>{product.product.reviews.length}</td>
                                <td>
                                    <button className='btn'>Update</button>
                                </td>
                                <td>
                                    <button className='btn btn-primary ml-3'>Delete</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Products
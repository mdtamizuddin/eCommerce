import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading'

const Order = () => {
  const url = 'https://dandabazz.onrender.com/orders'
  const { isLoading, data } = useQuery(['Orders-all'], () =>
    fetch(url)
      .then(res => res.json()
      )
  )
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <h1 className="text-center text-4xl pb-5">All Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th />
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Orders Position</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              data.map((order, index) => <tr key={order._id}>
                <th>{index + 1}</th>
                <td >
                  <div className="avatar">
                    <div className="w-28 rounded border">
                      <img src={order?.product?.images[0]} />
                    </div>
                  </div>
                </td>
                <td className='text-md'>{order?.product?.name?.slice(0, 30)}..</td>
                <td>{order?.email}</td>
                <td>
                  <button className='btn btn-primary'>{order?.position}...</button>
                </td>
              </tr>)
            }


          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Order
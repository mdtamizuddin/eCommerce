import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../AllCatagories/Component/ProductCard'
const NewArrival = () => {
    return (
        <div className='container mx-auto my-20'>
            <h1 className="text-4xl font-bold flex justify-between items-end">
                New Arrival
            <Link className='btn-link btn-primary text-sm' to={'/'}>View All</Link>
            </h1>
            <div className='grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-4'>
                <ProductCard hidden={true} height={'450px'} />
                <ProductCard hidden={true} height={'450px'} />
                <ProductCard hidden={true} height={'450px'} />
                <ProductCard hidden={true} height={'450px'} />
            </div>
        </div>
    )
}

export default NewArrival
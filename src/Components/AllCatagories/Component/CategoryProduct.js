import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const CategoryProduct = () => {
    return (
        <section>
            <h2 className='flex justify-between'>
                <span className='font-bold'>Product List</span>
                <Link className='btn-link text-primary font-bold' to={'/product'}>Show All</Link>
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10 gap-7 px-2 product-container'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default CategoryProduct
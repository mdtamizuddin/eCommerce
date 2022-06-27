import React from 'react'
import Brand from './Brand'
import CategoriesCard from './CategoriesCard'

import CategoryProduct from './CategoryProduct'
const ComponentViewer = () => {
    return (
        <main className='p-0 lg:p-5 w-full'>
            <div className="catagories grid grid-cols-3 lg:grid-cols-4 gap-6 p-3">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
            </div>
            <Brand />
            <section className='mt-14 p-2'>
                <CategoryProduct />
            </section>
        </main>
    )
}

export default ComponentViewer
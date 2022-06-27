import React from 'react'
import CategoriesCard from './CategoriesCard'
import simsong from '../icons/brands/SimSong.png'
import Harps from '../icons/brands/Harps.png'
import Diskvan from '../icons/brands/DiskVan.png'
import Ikon from '../icons/brands/Ikon.png'
import Strons from '../icons/brands/Strons.png'
import Cocoon from '../icons/brands/Cocoon.png'
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
            <div className='p-2'>

                <h1 className='text-2xl font-bold  mt-10'>Featured Brand</h1>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
                    <img className='border px-6 py-4' src={simsong} alt="" />
                    <img className='border px-6 py-4' src={Diskvan} alt="" />
                    <img className='border px-6 py-4' src={Harps} alt="" />
                    <img className='border px-6 py-4' src={Ikon} alt="" />
                    <img className='border px-6 py-4' src={Strons} alt="" />
                    <img className='border px-6 py-4' src={Cocoon} alt="" />
                </div>
            </div>
            <section className='mt-14 p-2'>
                <CategoryProduct />
            </section>
        </main>
    )
}

export default ComponentViewer
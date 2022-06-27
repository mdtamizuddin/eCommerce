import React from 'react'
import simsong from '../icons/brands/SimSong.png'
import Harps from '../icons/brands/Harps.png'
import Diskvan from '../icons/brands/DiskVan.png'
import Ikon from '../icons/brands/Ikon.png'
import Strons from '../icons/brands/Strons.png'
import Cocoon from '../icons/brands/Cocoon.png'

const Brand = () => {
    return (
        <div className='p-2 container mx-auto'>
            <h1 className='text-2xl font-bold  mt-10'>Featured Brand</h1>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
                <img className=' hover:shadow-2xl px-6 py-4' src={simsong} alt="" />
                <img className=' hover:shadow-2xl px-6 py-4' src={Diskvan} alt="" />
                <img className=' hover:shadow-2xl px-6 py-4' src={Harps} alt="" />
                <img className=' hover:shadow-2xl px-6 py-4' src={Ikon} alt="" />
                <img className=' hover:shadow-2xl px-6 py-4' src={Strons} alt="" />
                <img className=' hover:shadow-2xl px-6 py-4' src={Cocoon} alt="" />
            </div>
        </div>
    )
}

export default Brand
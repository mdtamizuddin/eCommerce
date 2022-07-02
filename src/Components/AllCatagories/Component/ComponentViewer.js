import React from 'react'
import Brand from './Brand'
import CategoriesCard from './CategoriesCard'
import Laptop from '../icons/Laptop.svg'
import Camera from '../icons/Camera.svg'
import Headset from '../icons/Headset.svg'
import Smartphone from '../icons/Smartphone.svg'
import Printer from '../icons/Printer.svg'
import Gamepad from '../icons/Gamepad.svg'
import Microphone from '../icons/Microphone.svg'
import SmartWatch from '../icons/SmartWatch.svg'

import CategoryProduct from './CategoryProduct'
const ComponentViewer = () => {
    return (
        <main className='p-0 lg:p-5 w-full'>
            <div className="catagories grid grid-cols-3 lg:grid-cols-4 gap-6 p-3">
                {
                    [
                        { image: Laptop, name: "Laptop" },
                        { image: Camera, name: "Camera" },
                        { image: Microphone, name: "Microphone" },
                        { image: SmartWatch, name: "SmartWatch" },
                        { image: Headset, name: "Headset" },
                        { image: Smartphone, name: "Smartphone" },
                        { image: Printer, name: "Printer" },
                        { image: Gamepad, name: "Gamepad" },

                    ].map((image, index) => <CategoriesCard key={index} image={image} />)
                }


            </div>
            <Brand />
            <section className='mt-14 p-2'>
                <CategoryProduct />
            </section>
        </main>
    )
}

export default ComponentViewer
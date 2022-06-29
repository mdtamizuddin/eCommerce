import React from 'react'
import { NavLink } from 'react-router-dom'
import Quality from './icon/Quality.svg'
import Delivery from './icon/Delivery.svg'
import original from './icon/original.svg'
import cashDelivery from './icon/Cash-Delivery.svg'
import Team from '../OurTeam/Team'



const About = () => {
    return (
        <main>
            <div className='container mx-auto py-7'>
                <div className=" breadcrumbs">
                    <ul>
                        <li>
                            <NavLink to={'/home'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={'text-primary'} to={'/about'}>About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Navigation End  */}

            <section className='mt-10 container mx-auto'>

                <div className="container mx-auto">
                    <h1 className='text-4xl font-bold text-center'>About Dandabazz</h1>

                    <p className='lg:text-center text-left text-gray-500 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium aut non dicta nulla harum,<br /> ullam, deleniti eum asperiores esse atque similique aperiam dignissimos odio a animi consectetur odit distinctio.<br /> Facere fuga numquam inventore odio at id natus. Perspiciatis dolore omnis molestiae earum non. Obcaecati debitis minima aut ipsum eius!</p>
                </div>
                <img className='mx-auto mt-14 lg:h-96' src="https://www.pngall.com/wp-content/uploads/11/Home-Appliance-Background-PNG.png" alt="" />
            </section>
            <section className='container mx-auto mt-20'>
                <h1 className='text-4xl font-bold text-center'>Why Choosing Us</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10">
                    <div className="card flex flex-col items-center justify-center p-5">
                        <img className='w-20' src={Quality} alt="" />
                        <h2 className='text-2xl text-center mt-3 font-bold'>54 Brands</h2>
                        <p className='text-center mt-2 text-sm'>Lorem ipsum dolor sit amet,<br />  consectetur adipiscing elit, sed do. </p>
                    </div>
                    <div className="card flex flex-col items-center justify-center p-5">
                        <img className='w-20' src={Delivery} alt="" />
                        <h2 className='text-2xl text-center mt-3 font-bold'>Fast Delivery</h2>
                        <p className='text-center mt-2 text-sm'>Lorem ipsum dolor sit amet,<br />  consectetur adipiscing elit, sed do. </p>
                    </div>
                    <div className="card flex flex-col items-center justify-center p-5">
                        <img className='w-20' src={cashDelivery} alt="" />
                        <h2 className='text-2xl text-center mt-3 font-bold'>COD Service</h2>
                        <p className='text-center mt-2 text-sm'>Lorem ipsum dolor sit amet,<br />  consectetur adipiscing elit, sed do. </p>
                    </div>
                    <div className="card flex flex-col items-center justify-center p-5">
                        <img className='w-20' src={original} alt="" />
                        <h2 className='text-2xl text-center mt-3 font-bold'>100% Duplicate Product</h2>
                        <p className='text-center mt-2 text-sm'>Lorem ipsum dolor sit amet,<br />  consectetur adipiscing elit, sed do. </p>
                    </div>
                </div>
            </section>
            {/* our team Section  */}
            <Team />
        </main>
    )
}

export default About


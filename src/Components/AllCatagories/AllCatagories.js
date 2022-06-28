import { Rating, Slider } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ComponentViewer from './Component/ComponentViewer'

const AllCatagories = () => {
    const [setValue] = useState(0)
    const [nav, setClass] = useState('category-sidebar')
    const showBar = () => {
        if (nav === "category-sidebar") {
            setClass('show-sidebar animate__animated animate__fadeInUp')
        }
        else {
            setClass('category-sidebar')
        }
    }

    return (
        <div className='relative'>

            <div className="container mx-auto mt-9">
                <div class=" breadcrumbs text-xl">
                    <ul>
                        <li>
                            <NavLink to={'/home'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='text-primary' to={'/products'}>All Category</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className='w-full flex items-center  border px-10 md:hidden lg:hidden sticky top-0 z-50 bg-base-200'>
                <button onClick={showBar} className='btn btn-ghost'><i className="fa-solid text-2xl fa-bars"></i> </button>

                <div className="text-sm breadcrumbs ml-2">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/all-category'}>All Catagory</Link></li>
                    </ul>
                </div>
            </nav>
            <h1 className='text-center text-4xl mt-20 font-bold'>All Categories</h1>
            <p className='text-center mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.
            </p>
            <section className='container mx-auto mt-14'>
                <div className='flex'>
                    <div className={`p-4 ${nav}  border p-5 w-64  mr-2 overflow-y-auto`}>

                        <div className='menu '>
                            <ul className="bg-base-100 text-base-content h-[550px] color-scroll overflow-x-auto">
                                {/* Sidebar content here */}
                                <li className='hover:bg-base-100'>
                                    <h2 className='font-bold text-neutral hover:bg-base-100'>All Ctaegories</h2>
                                </li>
                                <li>
                                    <Link to={'#'}>Computer & Laptop <span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Mobile & Tablet <span className='text-accent'>(135)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Camara <span className='text-accent'>(255)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>TV & Smart Box <span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Home Appliance<span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Smart Watch <span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Microphone & Audio <span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Gaming <span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Printer <span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Accessories<span className='text-accent'>(25)</span></Link>
                                </li>
                                <li>
                                    <Link to={'#'}>More Catagories <span className='text-accent'>(25)</span></Link>
                                </li>
                            </ul>
                            {/* Filter by price */}
                            {/* Filter by price */}
                            <div className="divider mt-10"></div>
                            <form className='mx-1'>
                                <h1 className='flex items-center justify-between w-full'>Filter by price <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                <h1 className='text-accent'>Price : <span className='font-bold text-neutral mt-5'>$100-$206</span></h1>
                                {/* Filter by Location  */}
                                {/* Filter by Location  */}
                                {/* Filter by Location  */}
                                <h1 className='flex mt-8 items-center justify-between w-full'>Filter by Location <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                                <div className="form-control mt-5">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Bangladesh</span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" defaultChecked='checked' />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Australia</span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Jarman</span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">China</span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                            </form>
                            <div className="divider mt-10"></div>
                            <form className='mx-1'>
                                <h1 className='flex items-center justify-between w-full'>Filter by Ratings <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                                <div className="form-control mt-5">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            <Rating
                                                name="simple-controlled"
                                                value={1}
                                                style={{ color: '#F46B5B' }}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            <Rating
                                                name="simple-controlled"
                                                value={2}
                                                style={{ color: '#F46B5B' }}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            <Rating
                                                name="simple-controlled"
                                                value={3}
                                                style={{ color: '#F46B5B' }}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            <Rating
                                                name="simple-controlled"
                                                value={4}
                                                style={{ color: '#F46B5B' }}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            <Rating
                                                name="simple-controlled"
                                                value={5}
                                                style={{ color: '#F46B5B' }}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </span>
                                        <input type="radio" name="radio-6" className="radio checked:bg-primary" defaultChecked='checked' />
                                    </label>
                                </div>
                            </form>
                            <div className="divider mt-10"></div>
                            <h1 className='flex items-center justify-between mt-3 w-full'>Filter by Brand <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                            <h1 className='flex items-center justify-between mt-3 w-full'>Filter by Promotion <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                            <h1 className='flex items-center justify-between mt-3 w-full'>Filter by Payment <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                            <h1 className='flex items-center justify-between mt-3 w-full'>Filter by Shipment <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                            {/* end */}


                            <button className='btn btn-primary mt-10 text-white '>Filter</button>
                            <button className='btn-link mt-5 text-primary font-bols'>Reset Filter </button>
                        </div>

                    </div>
                    {/* Left Side End Here  */}
                    {/* Left Side End Here  */}
                    <div className='w-full h-auto bg-zinc-100'>
                        <ComponentViewer />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllCatagories
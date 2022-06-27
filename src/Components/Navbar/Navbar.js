import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './Image/logo.png'
import cartIcon from './Image/cart-bag.svg'
import Email from './Image/Email.svg'
const Navbar = () => {
    return (
        <main className='container mx-auto'>
            <TopNavbar />
            <NavbarBottom />
        </main>
    )
}

export default Navbar

// navbar  Top Part Is Start Here 

const TopNavbar = () => {
    return (
        <section className='shadow mb-2 px-3 '>
            <div className="topnavContainer hidden justify-items-center lg:flex justify-center lg:justify-between items-center py-2">
                <div className="icons flex">
                    <i className="fa-brands text-xl text-accent mr-3 fa-instagram"></i>
                    <i className="fa-brands text-xl text-accent mr-3 fa-facebook-square"></i>
                    <i className="fa-brands text-xl text-accent mr-3 fa-twitter"></i>
                    <i className="fa-brands text-xl text-accent mr-3 fa-linkedin"></i>
                </div>
                <div className='topNavRightSide flex  justify-items-center'>
                    <Link className='btn-link flex mr-4 items-center text-accent' to={'#'}>
                        <i className="fa-solid  text-primary mr-3 fa-phone"></i>
                        +880123-789456
                    </Link>
                    <Link className='btn-link flex  items-center text-accent' to={'#'}>
                        <i className="fa-solid  text-primary mr-3 fa-envelope"></i>
                        exmaple@gmail.com
                    </Link>
                    <Link className='btn-link ml-4 flex items-center text-accent' to={'/login'}>
                        <i className="fa-solid text-primary mr-3 fa-user"></i>
                        Account
                    </Link>
                </div>
                {/* //End Here */}
            </div>
        </section>
    )
}
// Top navbar End Here 

const NavbarBottom = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto">
                        <Navigations />
                    </ul>
                </div>
                <a href='/' className="btn-ghost normal-case text-xl">
                   <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center p-0">
                    <Navigations />
                </ul>
            </div>
            <div className="navbar-end ">
                <Link className='relative mr-5' to={'#'}>
                    <div className="badge badge-primary absolute bottom-7 left-2 ml-2 text-white font-bold">99</div>
                    <img src={cartIcon} alt="cartIcon" />
                </Link>
                <Link to={'#'}>
                    <img src={Email} alt="Email" />
                </Link>
            </div>
        </div>
    )
}

const Navigations = () => {
    return (
        <>
            <li className='mx-2'><NavLink className='nl' to='/home'>Home</NavLink></li>
            <li className='mx-2'><NavLink className='nl' to='/about'>About</NavLink></li>
            <li className='mx-2'><NavLink className='nl' to='/blog'>Blog</NavLink></li>
            <li className='mx-2'><NavLink className='nl' to='/contact'>Contact</NavLink></li>
            <div className='flex h-8 lg:ml-14 mt-3  px-3 lg:px-3 lg:mt-0'>
                <input type="text" placeholder="Type here" className="bg-base-200 lg:w-64 text-black h-full  rounded-none input focus:border-primary focus:outline-none " />
                <button className='h-full bg-primary px-5'>
                    <i className="fa-solid text-white fa-magnifying-glass"></i>
                </button>
            </div>

            <div className="icons flex py-3 justify-center mt-3 lg:hidden">
                <i className="fa-brands text-xl text-accent mr-3 fa-instagram"></i>
                <i className="fa-brands text-xl text-accent mr-3 fa-facebook-square"></i>
                <i className="fa-brands text-xl text-accent mr-3 fa-twitter"></i>
                <i className="fa-brands text-xl text-accent mr-3 fa-linkedin"></i>
            </div>

            <div className='topNavRightSide flex flex-col items-center lg:hidden'>
                <Link className='btn-link flex mr-4 items-center text-accent' to={'#'}>
                    <i className="fa-solid  text-primary mr-3 fa-phone"></i>
                    +880123-789456
                </Link>
                <Link className='btn-link flex  items-center text-accent' to={'#'}>
                    <i className="fa-solid  text-primary mr-3 fa-envelope"></i>
                    dexterousprogrammers@gmail.com
                </Link>
                <Link className='btn-link ml-4 flex items-center text-accent' to={'/account'}>
                    <i className="fa-solid text-primary mr-3 fa-user"></i>
                    Account
                </Link>
            </div>
        </>
    )
}
import React from 'react'
import './Footer.css'
import logo from '../Navbar/Image/logo.png'
const Footer = () => {
    return (

        <footer className="text-gray-600 body-font">
            <div className="container px-5 lg:py-24 mx-auto flex md:items-center lg:items-start md:flex-col md:flex-nowrap flex-wrap flex-col">
                <div className="lg:w-96 w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a href="!#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="mb-2 text-xl">
                            <img src={logo} alt="" />
                        </span>
                    </a>
                    <p className="mt-2  text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <span className="inline-flex mt-5 justify-center sm:justify-start">
                        <a href="!#" className="text-gray-500">
                            <i className="fa-brands py-2 px-3 mr-3
                            bg-primary rounded-lg text-2xl text-gray-200 fa-facebook-square shadow-primary hover:shadow-lg"></i>
                        </a>
                        <a href="!#" className="ml-3 text-gray-500">
                            <i className="fa-brands py-2 px-3 mr-3
                            bg-primary rounded-lg text-2xl text-gray-200 fa-twitter shadow-primary hover:shadow-lg"></i>
                        </a>
                        <a href="!#" className="ml-3 text-gray-500">
                            <i className="fa-brands py-2 px-3 mr-3
                            bg-primary rounded-lg text-2xl text-gray-200 fa-linkedin shadow-primary hover:shadow-lg"></i>
                        </a>
                    </span>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-between">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Company</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">About</a>
                            </li>
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Product</a>
                            </li>
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Contact</a>
                            </li>
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Blog</a>
                            </li>
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Careers</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Information</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Help center</a>
                            </li>
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Payment Method</a>
                            </li>
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Return & Refund</a>
                            </li>
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-4 lg:mb-0">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Contact</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="!#" className="text-gray-600 hover:text-gray-800 flex justify-center
                                 items-center lg:justify-start">
                                    <i className="fa-solid mr-3 text-primary fa-phone"></i>
                                    +8801824692955
                                </a>
                            </li>
                            <li className='mt-2'>
                                <a href="!#" className="text-gray-600 hover:text-gray-800 ">
                                    <i className="fa-solid mr-3 text-primary fa-envelope"></i>
                                    tamizrabbi@gmail.com
                                </a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 ">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between" >
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Dandabazz —
                        <a href="!#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Tamiz</a>
                    </p>
                    <span className='text-center'>
                        <i className="fa-solid text-primary text-xl fa-credit-card"></i>
                        <i className="fa-brands text-xl ml-3 text-primary fa-cc-visa"></i>
                        <i className="fa-brands text-xl text-primary ml-3 fa-paypal"></i>
                    </span>
                </div>
            </div>
        </footer>


    )
}

export default Footer
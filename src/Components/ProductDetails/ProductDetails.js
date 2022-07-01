import { Rating } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useReview from '../Hook/useReview';
import DetailsBottom from './DetailsBottom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Firebase/firebase.init'
import { toast } from 'react-toastify';
import useProduct from '../Hook/useProduct';


const ProductDetails = () => {
    const [user, loading] = useAuthState(auth)
    const { review } = useReview()
    const { id } = useParams()
    const [counter, setCounter] = useState(1)
    const [adding, setAdding] = useState(false)
    const addToCart = () => {
        setAdding(true)
        fetch('https://dandabazz.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                product: {
                    name: review.name,
                    price: parseInt(review.price) * counter,
                    images: review.images,
                    quantity: counter
                },
                email: user?.email
            })
        })
            .then(res => {
                console.log(res)
                setAdding(false)
                toast.success("Added On Cart")

            })
        // .then(data => {
        //     console.log(data)

        // })
    }

    if (loading) {
        return <h1>loading....</h1>
    }
    return (
        <main className='mt-20'>
            <section className='grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10 mt-10'>
                {/* Box 1*/}
                {/* Box 1 */}
                <div className='w-full h-96 lg:h-auto rounded-lg overflow-hidden'>
                    <ProductDetailsLeft />
                </div>
                {/* Box 1 */}
                {/* Box 1 */}
                {/* Box 2 */}
                {/* Box 2 */}
                <div className='w-full h-auto border p-7'>
                    <div className=" breadcrumbs">
                        <ul>
                            <li>
                                <NavLink to={'/home'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/products'}>Products</NavLink>
                            </li>
                            <li>
                                <NavLink className='text-primary' to={`/products/${id}`}>Details</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Navigation End  */}

                    <div className='flex flex-col lg:flex-row md:flex-row mt-3 justify-between'>
                        <div className='flex flex-col lg:flex-row md:flex-row'>
                            <h1 className='flex mr-2 items-center'>
                                <span className='mr-3 font-bold'>5.0 </span>
                                <Rating value={5} />
                            </h1>
                            <span className='flex'>
                                |
                                <h2 className='mx-3 text-gray-500'>Review ({review?.reviews?.length})</h2> |
                                <h2 className='mx-3 text-gray-500'>Sold {review.sold}</h2>
                            </span>
                        </div>
                        <a href="!#" className='font-bold hover:text-primary'>
                            <i className='fa-solid fa-heart text-primary mr-2'></i>
                            Add to Wishlist
                        </a>
                    </div>
                    {/* Stop  */}
                    <h1 className="text lg:text-xl mt-4 font-[600]">
                        {review.name}
                    </h1>
                    <h1 className='font-bold text-2xl items-center mt-3 flex'>${review.price}
                        <span className='line-through text-sm ml-3 font-normal text-gray-400'>${review.price * 2}</span>
                        <button className='border btn btn-sm btn-primary border-primary text-white ml-3'>Save 50%</button>
                    </h1>

                    <div className='flex justify-around mt-7'>
                        <h2>
                            <i className="fa-solid text-primary mr-3 fa-truck-fast"></i>
                            Free Delivery
                        </h2>
                        <h2>
                            <i className="fa-solid text-primary mr-3 fa-tachograph-digital"></i>
                            Available Voucher
                        </h2>
                        <h2>
                            <i className="fa-solid text-primary mr-3 fa-box"></i>
                            In Stock
                        </h2>
                    </div>
                    <div className="divider mt-5"></div>
                    <h4 className='text-xl'>Description</h4>
                    <p className='mt-3 text-sm'>{review?.description?.slice(0, 180)}</p>

                    <div className='mt-7 flex-col lg:flex-row md:flex-row flex items-start lg:items-center lg:justify-between justify-start '>
                        <div className='flex items-center'>
                            <h4 className='font-bold text-gray-600'>Quantity</h4>
                            <div className='ml-7'>
                                <button
                                    disabled={counter <= 1}
                                    onClick={() => {
                                        counter > 1 && setCounter(counter - 1)
                                    }}
                                    className='btn text-gray-700 bg-gray-300 border-none text-3xl hover:text-white'>
                                    -
                                </button>
                                <span className='text-gray-700 bg-white border-none text-3xl px-5'>
                                    {counter}
                                </span>

                                <button
                                    onClick={() => setCounter(counter + 1)}
                                    className='btn btn-primary text-gray-200 bg-primary border-none text-3xl font-normal hover:text-white'>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='mt-7 lg:mt-0 md:mt-0 flex lg:block justify-between w-full lg:w-auto'>
                            <button
                                onClick={addToCart}
                                className={`btn text-white lg:mr-4 btn-primary ${adding && 'loading'}`}>
                                Add to cart
                            </button>

                            <button className='btn btn-outline btn-primary hover:text-white'>
                                Chat
                            </button>


                        </div>
                    </div>


                </div>
                {/* Box 2 */}
                {/* Box 2 */}
            </section>


            <DetailsBottom />
        </main>
    )
}

export default ProductDetails


const ProductDetailsLeft = () => {
    const [sLink, setLink] = useState('')
    const links = [
        'https://static-01.daraz.com.bd/p/2a4cf99730477a38cee3d3f30d84d918.jpg',
        'https://static-01.daraz.com.bd/p/c73fc6702cf30ccb3ad67d2028873248.jpg',
        'https://static-01.daraz.com.bd/p/775e3080308ff2b330ce44201bf8212d.jpg'
    ]
    const product = useProduct()
    return (
        <div className='w-full h-full'>
            <div
                style={{
                    backgroundImage: `url(${sLink ? sLink : product[0]?.product?.images[0]})`,
                    backgroundSize: 'contain ',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className='w-full h-[74%]'>

            </div>
            <div className='h-auto my-5'>
                <div className='prodictDetails'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper h-full bg-white"
                    >
                        {
                            product[0]?.product?.images?.map((link, index) => <SwiperSlide key={index} onClick={() => setLink(link)}>
                                <img src={link} className='bg-neutral cursor-pointer border h-full w-full' alt='' />
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>
        </div>
    )
}

import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from './images/banner-1.jpg'
import banner2 from './images/banner-2.jpg'
import banner3 from './images/banner-3.jpg'

const Header = () => {
    return (
        <div className='container mx-auto mt-10 rounded-xl overflow-hidden'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header
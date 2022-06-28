import React from 'react'
import Brand from '../AllCatagories/Component/Brand'
import BigSale from './BigSale'
import Category from './Category'
import FlashSale from './FlashSale'
import Header from './Header'
import NewArrival from './NewArrival'

const Home = () => {
    return (
        <div >
            <Header />
            <Category />
            <NewArrival />
            <FlashSale />
            <Brand />
            <BigSale />
        </div>
    )
}

export default Home
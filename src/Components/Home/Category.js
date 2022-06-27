import React from 'react'
import camara from '../AllCatagories/icons/Camera.svg'
import Headset from '../AllCatagories/icons/Headset.svg'
import gamepad from '../AllCatagories/icons/Gamepad.svg'
import microphone from '../AllCatagories/icons/Microphone.svg'
import smartWatch from '../AllCatagories/icons/SmartWatch.svg'
import Remote from '../AllCatagories/icons/TvRemote.svg'
const Category = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-2xl font-bold'>Category</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8 gap-x-3 gap-y-4 justify-items-center'>
                <Card image={camara} text={'Camera'} />
                <Card image={Headset} text={'HeadSet'} />
                <Card image={gamepad} text={'Game Pad'} />
                <Card image={microphone} text={'Microphone'} />
                <Card image={smartWatch} text={'Smart Watch'} />
                <Card image={Remote} text={'Tv Remote'} />

            </div>
        </div>
    )
}

export default Category

function Card({ image, text }) {
    return (
        <div className='h-12 cursor-pointer w-full border-2 rounded-lg flex p-2 items-center justify-start'>
            <img style={{ height: '97%' }} className='' src={image} alt="" />
            <h1 className='text-xl ml-3'>{text}</h1>
        </div>
    )
}
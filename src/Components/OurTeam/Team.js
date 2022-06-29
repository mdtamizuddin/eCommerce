import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
    return (
        <section className='my-20 mb-10 container mx-auto'>
            <h1 className='text-4xl font-bold text-center'>Our Team</h1>
            <p className='text-center mt-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt. </p>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 my-10'>
                <TeamCard image={'https://data1.ibtimes.co.in/en/full/603660/robert-downey-jr-tony-stark.png?w=707&h=412&l=50&t=40'} name={'Tony Stark'} />

                <TeamCard image={'https://www.giantfreakinrobot.com/wp-content/uploads/2021/07/thor-chris-hemsworth-ragnarok-e1627403631462.jpg'} name={'Chris Hemsworth'} />

                <TeamCard image={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F11%2F02%2Fwill-smith-2019-2000.jpg&q=60'} name={'Will Smith'} />

                <TeamCard image={'https://www.comingsoon.net/assets/uploads/2020/02/3631198-fast-9.jpg'} name={'Vin Diesel'}/>
            </div>
        </section>
    )
}

export default Team
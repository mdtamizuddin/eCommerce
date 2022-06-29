import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import AddReview from './AddReview'

const DetailsBottom = () => {
    return (
        <div className='container mx-auto mt-20'>
            <nav className='detailsNav'>
                <NavLink to={'review'} className='btn-link mt-3 btn' >Review (98) </NavLink>
                <NavLink to={'description'} className='btn-link btn'>Description</NavLink>
                <NavLink to={'gift-card'} className='btn-link btn'>Gift Cards</NavLink>
            </nav>
            <section className='grid grid-cols-1 lg:grid-cols-2  gap-14 mt-10'>
                <Outlet />

                <div className='review-Form lg:p-7'>
                    <AddReview />
                </div>
            </section>
        </div>
    )
}

export default DetailsBottom
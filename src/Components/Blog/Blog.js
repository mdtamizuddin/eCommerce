import React from 'react'
import { NavLink } from 'react-router-dom'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <main className='container mx-auto '>
            <Navigate />
            <section className='grid grid-cols-1 gap-10 justify-items-center w-full lg:grid-cols-4 md:grid-cols-2'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </section>
        </main>
    )
}

export default Blog

function Navigate() {
    return (
        <main className='container mx-auto py-10 text-xl'>

            <div className=" breadcrumbs">
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-primary'} to={'/blog'}>Blogs</NavLink>
                    </li>
                </ul>
            </div>
            <h1 className='text-4xl text-center py-5'>Letest Blogs</h1>
        </main>
    )
}
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <main className='container mx-auto mt-20'>
            <section className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2'>
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
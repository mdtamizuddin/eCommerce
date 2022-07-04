import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = () => {
    return (
        <main className='container mx-auto'>
            <Navigate />
            <section className='mt-10'>
                <h1 className='text-3xl font-bold text-left'>6 Best Smartphone for e-Sport Pro Player</h1>
                <p className='mt-3 flex items-center text-gray-500'>
                    <span className='flex items-center mr-5'>
                        <i class="fa-solid fa-calendar-days mr-3"></i>
                        21 Jul 2022
                    </span>
                    <span className='flex items-center mr-5'>
                        <i class="fa-solid fa-user mr-3"></i>
                        Added By Admin
                    </span>
                    <span className='flex items-center'>
                        <i class="fa-solid fa-message mr-3"></i>
                        95 Comments
                    </span>
                </p>

                <img className='block mx-auto mt-10 rounded-2xl' src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg" alt="" />
                <div className='mt-10'>

                    <p>
                        To support performance in playing, a professional e-sport player must use the right device. To support performance in playing, a professional e-sport player must use the right e-sport-support smartphone.
                    </p>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="card w-full h-auto bg-primary mt-10 p-5">
                        <p className='text-xl'>
                            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”
                        </p>
                        <h3 className='font-bold text-2xl mt-4'>
                            - Sam Alabama
                        </h3>
                    </div>
                </div>
                <div className='mt-10'>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p className='mt-3'>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                </div>
            </section>
        </main>
    )
}

export default BlogDetails



function Navigate() {
    return (
        <main className='container mx-auto py-10 text-xl'>

            <div className=" breadcrumbs">
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blog'}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-primary'} to={'/blog/details'}>Details</NavLink>
                    </li>
                </ul>
            </div>
            <h1 className='text-4xl text-center pt-5 pb-2'>Letest Blogs</h1>
            <p className='text-center text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quisquam!</p>
        </main>
    )
}
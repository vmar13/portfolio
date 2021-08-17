import React from 'react';
import Navbar from '../components/navbar';
import Blog1 from '../components/blog1';
import Blog2 from '../components/blog2';
import Blog3 from '../components/blog3';
import Blog4 from '../components/blog4';


const Blog = () => {
    return (
        <>
            <Navbar />
            <h2 className='about-container'>Blog</h2>
            <Blog1 />
            <Blog2 />
            <Blog3 />
            <Blog4 />
        </>
    )
}

export default Blog;
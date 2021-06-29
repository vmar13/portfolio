import React from 'react';
import Navbar from '../components/navbar';
import Blog1 from '../components/blog1';

const Blog = () => {
    return (
        <>
            <Navbar />
            <h2 className='about-container'>Blog</h2>
            <Blog1 />
        </>
    )
}

export default Blog;
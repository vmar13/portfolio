import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <Link to="/about/" style={{textDecoration: `none`}} className='nav-btn'>ABOUT</Link>
            <Link to="/projects/" style={{textDecoration: `none`}} className='nav-btn'>WORK</Link>
            <Link to="/resume/" style={{textDecoration: `none`}} className='nav-btn'>RESUME</Link>
            <Link to="/blog/" style={{textDecoration: `none`}} className='nav-btn'>BLOG</Link>
        </div>
    )
}

export default Navbar;
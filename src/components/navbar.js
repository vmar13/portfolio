import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <Link to="/about/" style={{textDecoration: `none`}} className='nav-btn'>About</Link>
            <Link to="/projects/" style={{textDecoration: `none`}} className='nav-btn'>Projects</Link>
            <Link to="/resume/" style={{textDecoration: `none`}} className='nav-btn'>Resume</Link>
            <Link to="/blog/" style={{textDecoration: `none`}} className='nav-btn'>Blog</Link>
        </div>
    )
}

export default Navbar;
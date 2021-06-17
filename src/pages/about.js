import React from 'react';
import { Link } from 'gatsby';
import Navbar from "../components/navbar";


const About = () => {
    return (
        <>
        <Navbar />
        <div>
            <h1>About Me</h1>
            <div className='about-container'>
                <h2>Hi, I'm Vanessa Martinez!</h2>
                <h3>I’m a full stack web developer based in NYC.</h3>
            </div>
        </div>
        </>
)
}

export default About;
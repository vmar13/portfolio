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
                <p>I come from a creative background, including writing, editing, painting (as a hobby), and now web development!</p>
                <p>I first became interested in code while working with developers at previous jobs. I was fascinated by the creative aspect of such technical work.</p>
                <p>So, I went to Flatiron School and completed the Software Engineering Immersive program.</p>
                <p> I love building dynamic user interfaces with well-structured backends. My tech stack includes: 
                    JavaScript, React, and Ruby on Rails.</p>
            </div>
        </div>
        </>
)
}

export default About;
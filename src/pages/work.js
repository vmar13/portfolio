import React from 'react';
import Navbar from "../components/navbar";
import HnetGIF from '../images/Hnet-image.gif';

const Work  = () => {
    return (
        <>
        <Navbar />
        <div className='about-container'>
            <h1>My Work</h1>
            <h3>F in Tea</h3>
            <img src={HnetGIF} alt='F in Tea GIF' />
            <h3>Unwind</h3>
            <h3>Recipekeeper</h3>
        </div> 
        </>
    )

}

export default Work;
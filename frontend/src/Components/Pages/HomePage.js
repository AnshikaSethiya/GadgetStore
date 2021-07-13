import React from 'react'
import watch from '../Images/watch.webp'
import './HomePage.style.css'

const HomePage = () => {
    return (
        <>
            <div className="image-text">
                <div className="first-text">
                    <h1>Select Your New <br /> Perfect Style</h1>
                    <button className="shop-btn"> Shop Now</button>
                </div>

                <div className="first-img">
                    <img src={watch} alt="watch"/>
                </div>
            </div>   

            <div className="new-arrival">

            </div>
        </>
    )
}

export default HomePage

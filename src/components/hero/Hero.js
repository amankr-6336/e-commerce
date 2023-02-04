import React from "react";
import { useNavigate } from "react-router-dom";
import './Hero.scss'

function Hero() {
    const navigate=useNavigate();

    return (
        <div className="Hero">
            <div className="hero-content center">
                <h2 className="heading">Exclusive Print and Designs</h2>
                <p className="subheading">
                    Exclusive Newness, for the Exclusive You.
                </p>
                <button onClick={()=> navigate('/category')} className="cta btn-primary">Explore more</button>
            </div>
        </div>
    );
}

export default Hero;
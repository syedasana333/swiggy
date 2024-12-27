import React from 'react';
import {IMAGE_URL} from "../public/Swiggy logo-2.avif";


const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png
        " alt="Image of Swiggy Logo" />

            <nav className="navbar">
                <ul>
                    <li>Corporate</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    )
}; 

export default Header; 

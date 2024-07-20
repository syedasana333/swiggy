import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" alt="Image of Swiggy Logo" />

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
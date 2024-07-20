import React from "react";
import {RATING_ICON} from "../utils/constants";

const Card = ({img, resName, rating, deliveryTime, cuisine}) => {

    const nameStyle = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };
    
    return (
        <div className="card">
            <img src={img} className="restaurant-img"/>
            <h2 style={nameStyle}>{resName}</h2>
            
            <div className="res-details">
                {RATING_ICON}
                <h3>{rating}</h3>
                <div className="circle"></div>
                <h3>{deliveryTime}</h3>
            </div>

            <p className="cuisineStyle">{cuisine}</p>
        </div>
    )
}

export default Card;
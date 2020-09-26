import React from 'react'
import './Card.css';


function Card({title,image}) {
    return (
        <div className="card">
            <div className="card_info">
            <p>{title}</p>
            </div>
            <img src={image} alt="movies"/>
            <button>View Details</button>
        </div>
    )
}

export default Card;

import React from "react";
import {Link} from 'react-router-dom'
const Cocktail = ({ id, name, alcoholic, category, img}) =>{
    return (
        <section className="cocktail-section">
            <div className="cocktail-img">
                <img src={img} alt={name}></img>
            </div>
            <div className="cocktail-info">
                <h2>{name}</h2>
                <h4>{alcoholic}</h4>
                <p>{category}</p>
                <Link to={`cocktail/${id}`} className="btn cocktail-btn">Details</Link>
            </div>
            
        </section>
    )
}

export default Cocktail
import React from "react";
import {Link} from 'react-router-dom'
const Error = () =>{
    return (
        <section className="section">
            <h1 className="section-title ">Opp! Wrong way</h1>
            <Link to='/' className="btn cocktail-btn detail-btn" >
                home
            </Link>

        </section>
    )
}

export default Error
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return <section className="navbar">
        <div className="nav-center">
            <Link to='/'>
                <img className="logo" src="https://i.pinimg.com/564x/91/d4/21/91d421297d232a53bf589f126057f349.jpg"></img>
            </Link>

            <ul className="nav-item">
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </div>
        
    </section>
}

export default Navbar
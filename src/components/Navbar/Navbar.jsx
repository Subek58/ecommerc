import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar=()=>{
    return(
        <nav className="nav-container">
            <div className="logo">Logo</div>
            <div className="Links">
                <NavLink to="/home/" className="Link">Home</NavLink>
                <NavLink to="/home/recipes" className="Link">Recipes</NavLink>
                <NavLink to="/home/carts" className="Link">Carts</NavLink>
                <NavLink to="/home/login" className="Link">Login</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
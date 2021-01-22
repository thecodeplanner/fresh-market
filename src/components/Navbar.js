import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    return(
        <div className="navbar">
            <NavLink to="/browse" exact>
                <li>browse</li>
            </NavLink>
            <NavLink to="/cart" exact>
                <li>my cart</li>
            </NavLink>
            <NavLink to="/login" exact>
                <li>login</li>
            </NavLink>
            <NavLink to="/signup" exact>
                <li>signup</li>
            </NavLink>
        </div>
    )
}

export default Navbar
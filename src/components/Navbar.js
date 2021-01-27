import React from "react"
import { NavLink, useHistory } from "react-router-dom"

function Navbar({currentUser, setCurrentUser}) {
    const history = useHistory()

    function logout() {
        
        setCurrentUser(null);
        history.push('/home')


      }

    return(
        <div className="navbar page-layout">
                <NavLink to="/browse" exact className="button" >
                    <li>browse</li>
                </NavLink>
                {currentUser ? 
                (<>
                <NavLink to="/cart" exact className="button">
                    <li>my cart</li>
                </NavLink>
                <a className="button" onClick={logout}>logout</a> 
                </>) : 
                (<>
                <NavLink to="/login" exact className="button">
                    <li>login</li>
                </NavLink>

                <NavLink to="/signup" exact className="button">
                    <li>signup</li>
                </NavLink>
                </>
                )}
        </div>
    )
}

export default Navbar
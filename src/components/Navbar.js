import React from "react"
import { NavLink, useHistory } from "react-router-dom"

function Navbar({currentUser, setCurrentUser}) {
    const history = useHistory()

    function logout() {
        
        setCurrentUser(null);
        history.push('/')


      }

    return(
        <div className="navbar">
            <NavLink to="/browse" exact>
                <li>browse</li>
            </NavLink>
        
        {currentUser ? 
            (<>
            <NavLink to="/cart" exact>
                <li>my cart</li>
            </NavLink>
             <button onClick={logout}>Logout</button> 
             </>) : 
            (<>
            <NavLink to="/login" exact>
                <li>login</li>
            </NavLink>

            <NavLink to="/signup" exact>
                <li>signup</li>
            </NavLink>
            </>
            )}
               

            
            
        </div>
    )
}

export default Navbar
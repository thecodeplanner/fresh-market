import React from "react"
import Navbar from "./Navbar"

function Header({currentUser, setCurrentUser}) {
    return (
        <>
        <div id="header">
            <img id="logo" src="Freshmade.png" alt="Freshmade"/>
        </div>
        <div>
             <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>

        </>
    )
}

export default Header;
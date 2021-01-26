import React from "react"
import Navbar from "./Navbar"



function Header({currentUser, setCurrentUser}) {
    return (
        <>
        <div className="header">
            <h1>Freshmade Market</h1>
        </div>
        <div>
             <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>

        </>
    )
}

export default Header;
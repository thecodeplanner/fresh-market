import React from "react"

function Search({setSearch}) {
    return (
        <div className="search">
            <input onChange={(event) => setSearch(event.target.value)} placeholder='Search for items'/> 
        </div>
    
    
    )

}

export default Search 
import React from "react"

function Search({setSearch}) {
    return (
        <div>
            <h4> Search </h4>
            <input onChange={(event) => setSearch(event.target.value)} placeholder='Search for items'/>   
        </div>
    
    
    )

}

export default Search 
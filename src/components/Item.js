import React, {useState} from "react"
import ItemDetails from "./ItemDetails"
import { NavLink, useHistory } from "react-router-dom"

function Item({item, currentUser}) {
    const history = useHistory()

    
    function handleUpdateItem() {
        history.push( `/update/${item.id}`)
    }

    // console.log(item.user.username)
    return (
        <div>
            <img className="image" src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            {currentUser ? item.user.username === "Melissa123" ? <button onClick={handleUpdateItem}>Update item</button> : null : null}
            <NavLink to={`/items/${item.id}`} exact>See More Details</NavLink>
        </div>

    )
}

export default Item
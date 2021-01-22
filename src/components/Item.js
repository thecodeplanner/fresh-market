import React, {useState} from "react"
import ItemDetails from "./ItemDetails"
import { NavLink } from "react-router-dom"

function Item({item}) {

    // const [details, setDetails] = useState(true)

    // function handleDetails() {
    //     if (details) {
    //         return <li>{item.description} </li>
    //     }
    // }
    return (
        <div>
            <img className="image" src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <NavLink to={`/items/${item.id}`} exact >See More Details</NavLink>
        </div>

    )
}

export default Item
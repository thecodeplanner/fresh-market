import React, {useState} from "react"
import ItemDetails from "./ItemDetails"
import { NavLink, useHistory } from "react-router-dom"

function Item({item, currentUser}) {
    const history = useHistory()
    const [like, setLike] = useState(false)

    
    function handleUpdateItem() {
        history.push( `/update/${item.id}`)
    }

    function handleLike() {
        setLike(!like)
    }

    // console.log(item.user.username)
    return (
        <>
        <div className="card">     
            <div className="card-info">
                <h3>{item.name}</h3>  
                {like ? <span className="like" onClick={handleLike}>♥️</span> :  <span className="like"  onClick={handleLike}> ♡</span> }
                <br></br>
                <img className="image" src={item.image} alt={item.name} />

                <br></br>     
                <br></br>
                <NavLink to={`/items/${item.id}`} exact className="button">show details</NavLink>
                <br></br>
                <br></br>
                {currentUser ? item.user.username === currentUser.username ? <a className="button" onClick={handleUpdateItem}>update item</a> : null : null}
            </div>
        </div>
        </>

    )
}

export default Item
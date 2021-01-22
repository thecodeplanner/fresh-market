import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

function ItemDetails() {

    const [item, setItem] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/items/${params.id}`)
         .then(r => r.json())
         .then((item) => {
         setItem(item)
         setIsLoaded(true)
         })
    },[params.id])

    if (!isLoaded) return <h2>Loading...</h2>;


    return(
        <div className="item-details">
            <img className="image" src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price} </p>
            <button>Add to Cart</button>
        </div>
    )
}

export default ItemDetails
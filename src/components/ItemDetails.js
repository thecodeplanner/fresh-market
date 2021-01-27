import React, {useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";

function ItemDetails({currentUser, onSetCart}) {
    const history = useHistory()

  

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


    function handleAddToCart() {
        if (currentUser) {
            onSetCart(item)
            alert(`${item.name} has been added to cart!`)
            history.push('/browse')
        }else {
            alert('Please login before adding to cart.')
        }
       
    }


    if (!isLoaded) return <h2>Loading...</h2>;



    return(
        <div className="page-layout">
            <div className="card">
            <div className="card-info">
                <h3>{item.name}</h3>
                <img className="image" src={item.image} alt={item.name} />
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)} </p>
                <a className="button" onClick={handleAddToCart}>Add to Cart</a>
            </div> 
            </div>
        </div>
     
    )
}

export default ItemDetails
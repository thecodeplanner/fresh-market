import React, {useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";

function UpdateItem({onDelete}) {
    const [item, setItem] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()
    const history = useHistory()
 
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/items/${params.id}`)
         .then(r => r.json())
         .then((item) => {
         setItem(item)
         setIsLoaded(true)
         setDescription(item.description)
         setQuantity(item.quantity)
         setPrice(item.price)
         })
    },[params.id])


    if (!isLoaded) return <h2>Loading...</h2>;

    function handleUpdateItem(e) {
        e.preventDefault()

        const newItem = {
            description,
            quantity: parseInt(quantity),
            price: parseFloat(price)
        }

        console.log(newItem)

        fetch(`http://localhost:3000/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newItem)
        })

        history.push(`/items/${item.id}`)
    }


       function handleDelete() {
           fetch(`http://localhost:3000/items/${item.id}`, {
               method: "DELETE"
           })
           onDelete(item.id)
           history.push("/browse")
       }


    return(
        <div>
            <div>
                <h3>{item.name}</h3>
                <img className="image" src={item.image} alt={item.name}/> 
            </div>
            <form className="edit-item" onSubmit={handleUpdateItem}>
                <label> Description
                    <textarea rows="2" cols="25"
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                
                <label> Quantity
                    <input
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
                <label> Price
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>

            <button onClick={handleDelete}>Sold Out!</button>
        </div>
         
        
    )
}

export default UpdateItem
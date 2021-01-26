import React from "react"
// import { useParams } from "react-router-dom";

function CartItem({cartItem, removeFromTheCart, cartPrice}) {

    // const cartItemTotal = cartItem.map((item) => {
    //     return item.price
    // })
    // console.log(itemPrice)

    return(
        <>
        <div>
            <div className="item-details">
            <img className="image" src={cartItem.image} alt={cartItem.name} />
            <h3>{cartItem.name}</h3>
            <p>Description: {cartItem.description}</p>
            <p>Quantity: 1</p>
            <p>Price: ${cartItem.price} </p>
            <button onClick={() => {removeFromTheCart(cartItem.id)}}>Remove</button>
             </div>     
        </div>
        </>
        
    )

    

}

    export default CartItem
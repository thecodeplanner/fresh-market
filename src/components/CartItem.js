import React from "react"

function CartItem({cartItem, removeFromTheCart, cartPrice}) {

    // const cartItemTotal = cartItem.map((item) => {
    //     return item.price
    // })
    // console.log(itemPrice)

    return(
        <>
        <div className="card">
            <div className="card-info">
                <img className="image" src={cartItem.image} alt={cartItem.name} />
                <h3>{cartItem.name}</h3>
                <p>{cartItem.description}</p>
                <p>Quantity: 1</p>
                <p>Price: ${cartItem.price.toFixed(2)}</p>
                <button className="ui negative basic button" onClick={() => {removeFromTheCart(cartItem)}}>Remove</button>
             </div>     
        </div>
        </>
        
    )

    

}

    export default CartItem
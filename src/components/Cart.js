import React from "react"
import CartItem from "./CartItem"

function Cart({inCart, removeFromTheCart, setInCart}) {

    function handleCheckout() {
        setInCart([])
        alert('Thanks for shopping at Freshmade!')
    }

    const cartPrice = inCart.map((cartItems) => {
        return cartItems.price
    })
   .reduce(function(a, b){
        return a + b;
    }, 0)

    // console.log('Total:', cartPrice)

    const cartItems = inCart.map((cartItems) => {
        return (
            <CartItem key={cartItems.id} cartItem={cartItems} removeFromTheCart={removeFromTheCart} cartPrice={cartPrice}/>
        )
    })
    return(
        <div>
            <h2> My Cart:</h2>
             {/* <div className="card">
              <div className="card-info"> */}
            {cartItems}
              {/* </div>
             </div> */}
             <h3>Total: ${cartPrice.toFixed(2)}  </h3>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
        
    )
}

export default Cart
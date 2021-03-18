import React, {useEffect, useState} from 'react'
import Header from './Header'
import ItemContainer from './ItemContainer'
import ItemDetails from './ItemDetails'
import Login from './Login'
import Home from './Home'
import UpdateItem from './UpdateItem'
import Signup from './Signup'
import Cart from './Cart'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const [items, setItems] = useState([])
  const [category, setCategory] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [inCart, setInCart] = useState([])
  
  useEffect(() => {
    fetch('https://freshmade-market.herokuapp.com/items')
      .then(res => res.json())
      .then(itemData => setItems(itemData))

  }, [])

  useEffect(() => {
    fetch('https://freshmade-market.herokuapp.com/categories')
    .then(res => res.json())
    .then(categoryData => setCategory(categoryData))
  }, [])


    function handleAddItem(newItemData) {
        const newItemList = [...items, newItemData]
        setItems(newItemList)
    }


    function handleDeleteItem(id) {  
      const updatedItemList = items.filter((item) => {
        return item.id !== id
    })
      setItems(updatedItemList)
    }

    function handleSetCart(item) {
      const updatedCart = [...inCart, item ]
      setInCart(updatedCart)
      console.log(inCart)
    }

    function handleRemoveFromCart(cartItem) {
     if (window.confirm(`Are you sure you want to remove ${cartItem.name} from cart?`)) {
      const updatedCart = inCart.filter((inCartItem) => {
        return inCartItem.id !== cartItem.id
      })
      setInCart(updatedCart)
     }
    }


  return (
    <div className="App">
      <Router>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Switch>
          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/browse">
            <ItemContainer items={items}  addItem={handleAddItem} currentUser={currentUser} category={category}/>
          </Route>
          <Route exact path="/items/:id">
            <ItemDetails currentUser={currentUser} onSetCart={handleSetCart} />
          </Route>
          <Route exact path="/update/:id">
            <UpdateItem onDelete={handleDeleteItem}/>
          </Route>
          <Route exact path="/cart">
            <Cart inCart={inCart} removeFromTheCart={handleRemoveFromCart} setInCart={setInCart} />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react'
// import logo from './logo.svg';
// import './App.css' from "./src"
import Header from './Header'
import ItemContainer from './ItemContainer'
import ItemDetails from './ItemDetails'
import Login from './Login'
import UpdateItem from './UpdateItem'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




function App() {
  const [items, setItems] = useState([])
  const [category, setCategory] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  console.log(currentUser)

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(itemData => setItems(itemData))

  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(categoryData => setCategory(categoryData))
  }, [])

  // console.log(category)

  // App 
    // Header
      // NavBar

    // Search

    // AddItem
    // ItemList
        // Item
          // ItemDetails
    // ItemCart
    // UserMarket

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


  return (
    <div className="App">
      <Router>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Switch>
          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/signup">
            {/* <Signup /> */}
          </Route>
          <Route exact path="/browse">
            <ItemContainer items={items}  addItem={handleAddItem} currentUser={currentUser} category={category}/>
          </Route>
          <Route exact path="/items/:id">
            <ItemDetails currentUser={currentUser}/>
          </Route>
          <Route exact path="/update/:id">
            <UpdateItem onDelete={handleDeleteItem}/>
          </Route>
          <Route exact path="/cart">
            {/* <ItemCart /> */}
          </Route>
        </Switch>
      </Router>
      
      
      {/* Create user's market after?? */}
      {/* <UserMarket /> */}

    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react'
// import logo from './logo.svg';
// import './App.css' from "./src"
import Header from './Header'
import ItemContainer from './ItemContainer'
import ItemDetails from './ItemDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const currentUser = { username: "Melissa123" }


function App() {
  const [items, setItems] = useState([])
  const [category, setCategory] = useState([])

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

  console.log(category)

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


  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/login">
            {/* <Login /> */}
          </Route>
          <Route exact path="/signup">
            {/* <Signup /> */}
          </Route>
          <Route exact path="/browse">
            <ItemContainer items={items}  addItem={handleAddItem} currentUser={currentUser} category={category}/>
          </Route>
          <Route exact path="/items/:id">
            <ItemDetails />
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

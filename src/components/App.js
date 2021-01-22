import React, {useEffect, useState} from 'react'
// import logo from './logo.svg';
// import './App.css' from "./src"
import Header from './Header'
import ItemContainer from './ItemContainer'
import ItemDetails from './ItemDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(itemData => setItems(itemData))

  }, [])

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
            <ItemContainer items={items} />
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

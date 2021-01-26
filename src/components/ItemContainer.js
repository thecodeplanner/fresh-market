import React, {useState} from "react"
import Search from './Search'
import Item from './Item'
import AddItem from './AddItem'

function ItemContainer({items, addItem, category, currentUser}) {
    const [search, setSearch] = useState("")
    
    const [showForm, setShowForm] = useState(false)

    const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    const item = filteredItems.map((item) => {
        return (
            <Item key={item.id} item={item} currentUser={currentUser}/>
        )
    })

    

    function showAddItemForm() {
        setShowForm(!showForm)

    }

    
    return (
        <div> 
            <Search setSearch={setSearch}/>
            {currentUser ? <button onClick={showAddItemForm}> Add Item</button> : (null)}
            {showForm ? <AddItem  addItem={addItem} category={category} currentUser={currentUser}/> : null}
            {item}
        </div>
    )
}

export default ItemContainer
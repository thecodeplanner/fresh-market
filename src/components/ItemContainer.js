import React from "react"
import Search from './Search'
import Item from './Item'
import AddItem from './AddItem'

function ItemContainer({items, addItem, category, currentUser}) {
    const item = items.map((item) => {
        return (
            <Item key={item.id} item={item} currentUser={currentUser}/>
        )
    })

    function handleAddItem() {
        return <AddItem />
    }

    
    return (
        <div> 
            <Search />
            {currentUser ? (<AddItem  addItem={addItem} category={category} currentUser={currentUser}/>) : (null)}
            {item}
        </div>
    )
}

export default ItemContainer
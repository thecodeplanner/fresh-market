import React from "react"
import Search from './Search'
import Item from './Item'
import AddItem from './AddItem'

function ItemContainer({items}) {
    const item = items.map((item) => {
        return (
            <Item key={item.id} item={item} />
        )
    })

    function handleAddItem() {
        return <AddItem />
    }
    return (
        <div> 
            <h3>Item Container</h3>
            <Search />
            {/* <button>Add Item to Freshmade Market</button> */}
            <AddItem />
            {item}
        </div>
    )
}

export default ItemContainer
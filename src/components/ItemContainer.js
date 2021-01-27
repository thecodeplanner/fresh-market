import React, {useState} from "react"
import Search from './Search'
import Item from './Item'
import AddItem from './AddItem'

function ItemContainer({items, addItem, category, currentUser}) {
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    
    const [showForm, setShowForm] = useState(false)

    const filteredSearchItems = items.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    const filteredCategoryItems = filteredSearchItems.filter((item) => {
        if (selectedCategory === "All") {
            return true
        }else {
            return item.category.name === selectedCategory
        }
    })

    const item = filteredCategoryItems.map((item) => {
        return (
            <Item key={item.id} item={item} currentUser={currentUser}/>
        )
    })

    // Toggle for Hide and Show Add Item Form 
    function showAddItemForm() {
        setShowForm(!showForm)
    }


    // Handle Filter Category
    function handleChangeFilter(e) {
        setSelectedCategory(e.target.value)
       
    }

    
    return (
        <div className="page-layout"> 
            <Search setSearch={setSearch}/>
            <br></br>
            <div className="Filter">
                    <select name="filter" onChange={handleChangeFilter}>
                        <option value="All">Filter By Category (Show All)</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Baked Goods">Baked Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Specialty">Specialty</option>
                    </select>
            </div>
            {currentUser ? <button onClick={showAddItemForm} className="add-item-button button"> Add Item</button> : (null)}
            {showForm ? <AddItem addItem={addItem} category={category} currentUser={currentUser}/> : null}
            <ul className="cards">
            {item}
            </ul>
        </div>
    )
}

export default ItemContainer
import React from "react"

function AddItem() {
    return (
        <form>
            <label> Name
                <input
                    type="text"
                />
            </label>
            <label> Description
                <input
                    type="text"
                />
            </label>
            <label> Quantity
                <input
                    type="number"
                />
            </label>
            <label> Price
                <input
                    type="text"
                />
            </label>
            <label> Image
                <input
                    type="text"
                />
            </label>
            <input type="submit" value="Add Item" />
        </form>
    )
}

export default AddItem 
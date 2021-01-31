import React, { useState } from "react"

function AddItem({ addItem, category, currentUser }) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [error, setError] = useState(null);


    function handleOption(e) {
        // console.log(e.target.value) // category name 
        const matchedCategory = category.filter((cat) => {
            if (cat.name === (e.target.value)) {
                return cat
            }
        })
        const categoryId = matchedCategory.map(category => category.id)
        setCategoryId(parseInt(categoryId))
    }

    // map over categories and render filter dropdown
    const categories = category.map((cat) => {
        return (
            <option onClick={handleOption}>{cat.name}</option>
        )
    })

    function handleSubmit(event) {
        event.preventDefault()

        const newItem = {
            name,
            description,
            quantity,
            price,
            image,
            user_id: currentUser.id,
            category_id: categoryId
        }

        fetch("https://freshmade-market.herokuapp.com/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((r) =>
                r.json().then((data) => {
                    if (r.ok) return data;
                    throw data;
                })
            )
            .then((data) => {
                // success:
                addItem(data);
            })
            .catch((data) => {
                // error:
                setError(data.error);
            });

        setName('')
        setDescription('')
        setQuantity('')
        setPrice('')
        setImage('')
    }


return (
    <form className="add-item-form" onSubmit={handleSubmit}>
        <label> name
                <br></br>
            <input
                className="add-item-input"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>
        <br></br>
        <br></br>
        <label> description
                <br></br>
            <textarea rows="2" cols="25"
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}

            />
        </label>
        <br></br>
        <br></br>
        <label> quantity
                <br></br>
            <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
        </label>
        <br></br>
        <br></br>
        <label> price
                <br></br>
            <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
        </label>
        <br></br>
        <br></br>
        <label> image
                <br></br>
            <input
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </label>
        <br></br>
        <br></br>
        <label> category
                <br></br>
            <select onChange={handleOption}>
                <option> Choose Category </option>
                {categories}
            </select>
        </label>
        <br></br>
        <br></br>
        {error ? <p style={{ color: "red" }}>Please make sure all inputs are filled in.</p> : null}
        <input className="button" type="submit" value="submit" />
    </form>
)
}

export default AddItem 
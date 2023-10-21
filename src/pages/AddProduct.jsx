import { useState } from 'react'

const AddProduct = () => {

    const [product, setProduct] = useState({title: '', price: '', description: '', image: ''})

    // add product to database


    const handleChange = (event) => {
        const { name, value } = event.target
        setProduct((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <form>
            <label>
                Product Name
                <input type='text' id='title' name='title' value={product.title} onChange={handleChange} />
            </label>

            <label>
                Price
                <input type='text' id='price' name='price' value={product.price} onChange={handleChange} />
            </label>

            <label>
                Description
                <textarea id='description' name='description' value={product.description} onChange={handleChange} />
            </label>

            <label>
                Image
                <input type='text' id='image' name='image' value={product.image} onChange={handleChange} />
            </label>

            {/* add the product on click */}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddProduct
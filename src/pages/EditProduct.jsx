import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EditProduct = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({title: '', price: '', description: '', image: ''})

    // fetch product by id from API


    // update product


    // delete product


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
                <input type='text' name='title' value={product.title} onChange={handleChange} />
            </label>

            <label>
                Price
                <input type='text' name='price' value={product.price} onChange={handleChange} />
            </label>

            <label>
                Description
                <input type='text' name='description' value={product.description} onChange={handleChange} />
            </label>

            <label>
                Image
                <input type='text' name='image' value={product.image} onChange={handleChange} />
            </label>

            <div className='edit-delete-buttons'>
                {/* update the product on click */}
                <button>Update</button>

                {/* delete the product on click */}
                <button>Delete</button>
            </div>
        </form>
    )
}

export default EditProduct
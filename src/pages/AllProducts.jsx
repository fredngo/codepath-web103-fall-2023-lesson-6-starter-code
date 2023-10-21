import { useState, useEffect } from 'react'
import Product from '../components/Product'
import panic from '../assets/panic.gif'

const AllProducts = () => {

    const [electronics, setElectronics] = useState([])

    // fetch all electronics from API


    return (
        <section>
            {
                electronics && electronics.length > 0 ?
                electronics.map((product, index) =>
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
                ) : <img src={panic} />
            }
        </section>
    )

}

export default AllProducts
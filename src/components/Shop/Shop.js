import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {


    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch(`https://bdexam.xyz/api/products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)


    }


    console.log(cart)


    return (
        <div className='shop'>


            <div className='product-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={handleAddToCart}
                    ></Product>)
                }


            </div>



            <div className='order-container'>

                <p>Order Summary</p>
                <p>Selected Item : {cart.length}</p>



            </div>







        </div>
    );
};

export default Shop;
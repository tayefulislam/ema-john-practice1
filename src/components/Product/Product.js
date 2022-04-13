import React from 'react';
import './Product.css'

const Product = ({ product, addToCart }) => {
    // console.log(product)
    const { name, img, price, ratings, seller } = product;

    return (

        <div className='product'>

            <img src={img} alt={name} />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p>Seller : {seller}</p>
                <p>Ratings : {ratings}</p>

            </div>

            <button onClick={() => addToCart(product)} className='btn-cart'>
                <p className='btn-text'> Add To Cart
                </p>


            </button>
        </div>

    );
};

export default Product;
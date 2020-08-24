import React from 'react';
import "./Product.css";

const Product = (props) => {
    
    const {img, name, price, stock, seller} = props.product;

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h5>{name}</h5>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddProduct(props.product)}>add to cart</button>
            
                {/* <div>
                    <h6>Features</h6>
                    <ul>
                        <li>features - 1</li>
                        <li>features - 2</li>
                        <li>features - 3</li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Product;
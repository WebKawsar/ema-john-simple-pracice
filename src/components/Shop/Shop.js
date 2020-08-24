import React, { useState } from 'react';
import fakeData from "../../fakeData/index";
import "./Shop.css";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {


    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    

    return (
        <div className="shop-section">
            <div className="product-section">
                {
                    

                    products.map(product => <Product key={product.price+product.key} handleAddProduct={handleAddProduct} product={product}></Product>)
                }
            </div>
            <div className="cart-section">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
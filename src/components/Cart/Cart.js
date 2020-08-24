import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    console.log(props.cart);
    const beforeTotal = cart.reduce((total, value) => total + value.price, 0)
    const tax = beforeTotal * .10;


    let shipping = 0;
    if(beforeTotal > 0 && beforeTotal < 100){
        shipping = 10;
    }
    else if(beforeTotal > 100 && beforeTotal < 200){
        shipping = 5;
    }
    else if(beforeTotal > 200){
        shipping = 0;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items ordered: {cart.length}</h5>
            <p>Items: {beforeTotal}</p>
            <p>Shipping & Handling: {shipping}</p>
            <p>Total before tax: {beforeTotal + tax}</p>
            <p>Estimated Tax: {tax}</p>
            <p>Order Total: {beforeTotal +  shipping + tax}</p>
        </div>
    );
};

export default Cart;
import React from 'react';

const CartContext = React.createContext({
    order: [],
    totalPrice: 0,
    totalAmount: 0,
    totalTime: 0,
    totalDiscount: 0
});


export default CartContext;
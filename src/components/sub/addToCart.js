import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddToCart = ({ id = null }) => {
    return (
        <button><FontAwesomeIcon icon="shopping-cart" /></button>
    )
}

export default AddToCart;
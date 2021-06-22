import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddToCart = ({ id = null }) => {
    return (
        <Link to={`/details/${id}`}><FontAwesomeIcon icon="shopping-cart" /></Link>
    )
}

export default AddToCart;

// TO DELETE
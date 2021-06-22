import React from 'react';
import { Link } from 'react-router-dom';
import { burgersData } from '../../data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BurgerItem from '../sub/burgerItem';


const Listing = () => {

    return (
        <>
            <h1>Welcome to WacDominique's*</h1>
            <h2>The best burgers you'll find on this fake app.</h2>
            <ul>
                {burgersData.burgers.map((burger) => {
                    return <li key={burger.id}>
                        <BurgerItem
                            price={burger.price}
                            name={burger.name}
                            discount={burger.discount}
                            image={burger.url}
                        />
                        <Link to={`/details/${burger.id}`}><FontAwesomeIcon icon="shopping-cart" /></Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Listing;
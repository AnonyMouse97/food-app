import React from 'react';

import { burgersData } from '../../data/data';

import BurgerItem from '../sub/burgerItem';
import AddToCart from '../sub/addToCart';


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
                        <AddToCart id={burger.id} />
                    </li>
                })}
            </ul>
        </>
    )
}

export default Listing;
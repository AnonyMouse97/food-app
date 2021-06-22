import React from 'react';

import { burgersData } from '../../data/data';

import BurgerItem from '../sub/burgerItem';

const Listing = () => {

    return (
        <ul>
            {burgersData.burgers.map((burger, index) => {
                return <li key={burger.id}>
                    <BurgerItem
                        price={burger.price}
                        name={burger.name}
                        discount={burger.discount}
                    />
                </li>
            })}
        </ul>
    )
}

export default Listing;
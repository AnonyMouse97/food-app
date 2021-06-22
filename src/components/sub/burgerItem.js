import React from 'react';

import burger from '../../data/img/burgers/defaultBurger.png';

const BurgerItem = ({ name, price, discount = null }) => {
    return (
        <div>
            <img src={burger} alt="burger" height="32px"></img>
            <h3>{name}</h3>
            <p>{price}$</p>
            {discount}
            <p> -{discount}%</p>
        </div>
    )
}

export default BurgerItem;
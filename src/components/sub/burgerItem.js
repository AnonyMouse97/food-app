import React from 'react';

import { minDigits } from '../../utils/digitsConv';

const BurgerItem = ({ name, price, discount = null, image = 'defaultBurger.png' }) => {

    return (
        <>
            <img src={`img/burgers/${image}`} alt={name} height="32px"></img>

            <h3>{name}</h3>

            {discount
                ? <> <del> ${minDigits(price)} </del> <p>${Math.round((price - price * discount / 100) * 100) / 100}</p> </>
                : <p>${minDigits(price)}</p>
            }

        </>
    )
}

export default BurgerItem;
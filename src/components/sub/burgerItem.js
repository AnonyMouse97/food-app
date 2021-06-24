import React from 'react';

import { minDigits } from '../../utils/digitsConv';

const BurgerItem = ({ name, price, discount = null, image = 'defaultBurger.png' }) => {

    return (
        <>
            <img src={`img/burgers/${image}`} alt={name}></img>

            <h3>{name}</h3>
            <div className="price">
                {discount
                    ? <>  <p>${Math.round((price - price * discount / 100) * 100) / 100}</p> <del>{minDigits(price)}</del></>
                    : <p>${minDigits(price)}</p>
                }
            </div>

        </>
    )
}

export default BurgerItem;
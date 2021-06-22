import React from 'react';

const BurgerItem = ({ name, price, discount = null, image = 'defaultBurger.png' }) => {

    return (
        <>
            <img src={`img/burgers/${image}`} alt={name} height="32px"></img>

            <h3>{name}</h3>

            {discount
                ? <> <del> ${price} </del> <p>${Math.round((price - price * discount / 100) * 100) / 100}</p> </>
                : <p>${price}</p>
            }

        </>
    )
}

export default BurgerItem;
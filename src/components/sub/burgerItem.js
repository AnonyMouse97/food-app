import React from 'react';

const BurgerItem = ({ name, price, discount = null, image = 'defaultBurger.png' }) => {

    return (
        <>
            <img src={`img/burgers/${image}`} alt="burger" height="32px"></img>

            <h3>{name}</h3>

            {discount
                ? <> <del> {price}$ </del> <p>{price - discount / 100}$</p> </>
                : <p>{price}$</p>
            }

        </>
    )
}

export default BurgerItem;
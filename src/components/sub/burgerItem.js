import React from 'react';


const BurgerItem = ({ name, price, discount = null, image = 'defaultBurger.png' }) => {


    return (
        <div>
            <img src={`img/burgers/${image}`} alt="burger" height="32px"></img>
            <h3>{name}</h3>
            <p>{price}$</p>
            {discount}
            <p> -{discount}%</p>
        </div>
    )
}

export default BurgerItem;
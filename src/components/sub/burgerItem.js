import React from 'react';


const BurgerItem = ({ name, price, discount = null, image = 'defaultBurger.png' }) => {


    return (
        <div>
            <img src={`img/burgers/${image}`} alt="burger" height="32px"></img>

            <h3>{name}</h3>

            {discount
                ? <div> <del> {price}$ </del> <p>{price - discount / 100}$</p> </div>
                : <p>{price}$</p>
            }

        </div >
    )
}

export default BurgerItem;
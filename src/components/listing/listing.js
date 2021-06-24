import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { burgersData } from '../../data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BurgerItem from '../sub/burgerItem';
import CartContext from '../sub/cartContext';


const Listing = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="listing">
            <div className="navigation">
                <Link to="/order" className="cart"><FontAwesomeIcon icon="shopping-cart" /><div>{cart.totalAmount}</div></Link>
            </div>

            <div className="title">
                <img src={'/img/mcdo.svg'} alt="WacDo's Logo" className="logo"></img>
                <h1>Welcome to WacDominique's*</h1>
                <em>*aka WacDo's</em>
                <h2>The best fake burgers around.</h2>
            </div>
            <ul>
                {burgersData.burgers.map((burger) => {
                    return <li key={burger.id}>
                        <BurgerItem
                            price={burger.price}
                            name={burger.name}
                            discount={burger.discount}
                            image={burger.url}
                        />
                        <Link to={`/details/${burger.id}`} className="buy"><FontAwesomeIcon icon="shopping-cart" /></Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Listing;
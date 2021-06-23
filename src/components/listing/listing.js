import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { burgersData } from '../../data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BurgerItem from '../sub/burgerItem';
import CartContext from '../sub/cartContext';


const Listing = () => {
    const { cart, setCart } = useContext(CartContext)

    return (
        <>
            <Link to="/order"><FontAwesomeIcon icon="shopping-cart" /><div>{cart.totalAmount}</div></Link>
            <h1>Welcome to WacDominique's*</h1>
            <em>*aka WacDo's</em>
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
                        <Link to={`/details/${burger.id}`}><FontAwesomeIcon icon="shopping-cart" /></Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Listing;
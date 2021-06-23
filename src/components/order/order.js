import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CartContext from '../sub/cartContext';
import AddRemove from '../sub/addRemove';
import BurgerItem from '../sub/burgerItem';
import { burgersData } from '../../data/data';

const Order = () => {
    const [amount, setAmount] = useState(0);
    const { cart, setCart } = useContext(CartContext)

    const handlePlus = () => {
    }
    const handleMinus = () => {

    }

    return (
        <>
            <Link to="/"><FontAwesomeIcon icon="chevron-left" /></Link>

            <ul>
                {cart.order.map((orderItem) => {
                    const burger = burgersData.burgers.find(x => x.id === orderItem.id)
                    return <li key={orderItem.id}>
                        <BurgerItem
                            price={burger.price}
                            name={burger.name}
                            discount={burger.discount}
                            image={burger.url}
                        />
                        <AddRemove
                            amount={orderItem.amount}
                            handlePlus={handlePlus}
                            handleMinus={handleMinus}
                        />
                        <button><FontAwesomeIcon icon="trash-alt" /></button>
                    </li>
                })}
            </ul>
            <dl>
                <dt>Items</dt>
                <dd>${cart.totalPrice}</dd>
                <dt>Discount</dt>
                <dd>-${cart.totalDiscount}</dd>
                <dt>Cost</dt>
                <dd>${Math.round((cart.totalPrice - cart.totalDiscount) * 100) / 100}</dd>
                <dt>Estimated time</dt>
                <dd>{cart.totalTime} mins</dd>
            </dl>

            <button onClick={() => alert('Fake Order is fakely sent to you ! 🚀')}>Payment & Delivery <FontAwesomeIcon icon="long-arrow-alt-right" /></button>
        </>
    )
}

export default Order;
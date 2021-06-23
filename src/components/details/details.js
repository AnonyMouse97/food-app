import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { burgersData } from '../../data/data';
import AddRemove from '../sub/addRemove'
import CartContext from '../sub/cartContext';

const Details = () => {

    const [amount, setAmount] = useState(1);
    const { cart, setCart } = useContext(CartContext)

    const { id } = useParams();
    // default burger / 404 / more stric routes to add
    const burger = burgersData.burgers.find(x => x.id === parseInt(id));

    const handlePlus = () => {
        setAmount(amount + 1);
    }
    const handleMinus = () => {
        setAmount(Math.max(amount - 1, 0));
    }
    const handleAdd = () => {
        if (!amount) {
            return
        }

        const newCart = cart;

        newCart.totalAmount += amount;
        newCart.totalTime += burger.time;
        if (burger.discount) {
            newCart.totalDiscount += Math.round((burger.discount / 100 * burger.price) * 100) / 100;
            newCart.totalPrice += Math.round((burger.price - burger.price * burger.discount / 100) * 100) / 100
        } else {
            newCart.totalPrice += burger.price;
        }


        const ordered = newCart.order.find(x => x.id === burger.id)

        if (ordered) {
            ordered.amount += amount;
        } else {
            newCart.order.push({
                id: burger.id,
                amount: amount
            });
        }


        setCart(newCart)
        setAmount(0);
    }


    return (
        <div>
            <Link to="/"><FontAwesomeIcon icon="chevron-left" /></Link>

            <div>{cart.totalAmount}</div>

            <img src={`../img/burgers/${burger.url}`} alt={burger.name} width="250px"></img>
            {
                burger.discount &&
                <p> {burger.discount}%  OFF</p>
            }
            <h2>{burger.name}</h2>

            {burger.discount
                ? <> <del> ${burger.price} </del> <p>${Math.round((burger.price - burger.price * burger.discount / 100) * 100) / 100}</p> </>
                : <p>${burger.price}</p>
            }

            <p>{burger.description}</p>

            <dl>
                <dt>Size</dt>
                <dd><FontAwesomeIcon icon="hamburger" /> {burger.size} </dd>
                <dt>Weight</dt>
                <dd><FontAwesomeIcon icon="weight-hanging" /> {burger.weight}g</dd>
                <dt> Prepare time</dt>
                <dd><FontAwesomeIcon icon="clock" /> {burger.time} mins</dd>
            </dl>

            <AddRemove
                amount={amount}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
            />

            <button onClick={handleAdd}><FontAwesomeIcon icon="shopping-cart" /> Add to cart</button>
        </div>
    )
}

export default Details;
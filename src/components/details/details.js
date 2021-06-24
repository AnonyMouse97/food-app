import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { burgersData } from '../../data/data';
import { minDigits } from '../../utils/digitsConv';
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

        const orders = cart.order
        const ordered = orders.find(x => x.id === burger.id)

        if (ordered) {
            ordered.amount += amount;
        } else {
            orders.push({
                id: burger.id,
                amount: amount
            });
        }

        setCart({
            order: orders,
            totalPrice: cart.totalPrice + burger.price * amount,
            totalAmount: cart.totalAmount + amount,
            totalTime: cart.totalTime + burger.time * amount,
            totalDiscount: cart.totalDiscount + Math.round((burger.discount / 100 * burger.price) * amount * 100) / 100
        })
        setAmount(1);
    }


    return (
        <div className="details">
            <div className="navigation">
                <Link to="/" className="back-link"><FontAwesomeIcon icon="chevron-left" /></Link>
                <Link to="/order" className="cart"><FontAwesomeIcon icon="shopping-cart" /><div>{cart.totalAmount}</div></Link>
            </div>


            <img src={`../img/burgers/${burger.url}`} alt={burger.name}></img>

            <div className="details-order">

                <div className="slide-bar"></div>

                {
                    burger.discount &&
                    <p className="discount"> {burger.discount}%  OFF</p>
                }

                <h2>{burger.name}</h2>

                <div className="price">
                    {
                        burger.discount
                            ? <> <p>${Math.round((burger.price - burger.price * burger.discount / 100) * 100) / 100}</p> <del>{minDigits(burger.price)}</del> </>
                            : <p>${minDigits(burger.price)}</p>
                    }
                </div>

                <p className="description">{burger.description}</p>

                <dl>
                    <div>
                        <dt>Size</dt>
                        <dd><FontAwesomeIcon icon="hamburger" /> {burger.size} </dd>
                    </div>
                    <div>
                        <dt>Weight</dt>
                        <dd><FontAwesomeIcon icon="weight-hanging" /> {burger.weight}g</dd>
                    </div>
                    <div>
                        <dt> Prepare time</dt>
                        <dd><FontAwesomeIcon icon="clock" /> {burger.time} mins</dd>
                    </div>
                </dl>

                <div className="add-cart">
                    <AddRemove
                        amount={amount}
                        handlePlus={handlePlus}
                        handleMinus={handleMinus}
                    />

                    <button onClick={handleAdd} label="Add to cart"><FontAwesomeIcon icon="shopping-cart" /> Add to cart</button>
                </div>
            </div>
        </div >
    )
}

export default Details;
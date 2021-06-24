import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CartContext from '../sub/cartContext';
import BurgerItem from '../sub/burgerItem';
import { burgersData } from '../../data/data';
import { minDigits } from '../../utils/digitsConv';

const Order = () => {
    const { cart, setCart } = useContext(CartContext);

    console.log(cart)

    const handlePlus = (id) => {
        const burger = burgersData.burgers.find(x => x.id === id);
        //const ordered = cart.order.find(x => x.id === id)
        const index = cart.order.findIndex(x => x.id === id);

        const orders = cart.order;
        orders[index].amount++;

        setCart({
            order: orders,
            totalPrice: cart.totalPrice + burger.price,
            totalAmount: cart.totalAmount++,
            totalTime: cart.totalTime + burger.time,
            totalDiscount: cart.totalDiscount + burger.discount / 100 * burger.price
        })
    }
    const handleMinus = (id) => {
        const burger = burgersData.burgers.find(x => x.id === id);
        const ordered = cart.order.find(x => x.id === id);
        const index = cart.order.findIndex(x => x.id === id);

        const orders = cart.order

        orders[index].amount--;
        if (ordered.amount === 0) {
            orders.splice(index, 1)
        }

        setCart({
            order: orders,
            totalPrice: cart.totalPrice - burger.price,
            totalAmount: cart.totalAmount - 1,
            totalTime: cart.totalTime - burger.time,
            totalDiscount: cart.totalDiscount - burger.discount / 100 * burger.price
        })
    }

    const handleDelete = (id) => {
        const burger = burgersData.burgers.find(x => x.id === id);
        const ordered = cart.order.find(x => x.id === id);
        const index = cart.order.findIndex(x => x.id === id);

        const orders = cart.order.splice(index, 1)

        setCart({
            order: orders,
            totalPrice: cart.totalPrice - (burger.price * ordered.amount),
            totalAmount: cart.totalAmount - ordered.amount,
            totalTime: cart.totalTime - (burger.time * ordered.amount),
            totalDiscount: cart.totalDiscount - (burger.discount / 100 * burger.price) * ordered.amount
        })


    }

    return (
        <div className="order">
            <div className="navigation">
                <Link to="/" className="back-link"><FontAwesomeIcon icon="chevron-left" /></Link>
            </div>

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
                        <div className="plusMinus">
                            <button onClick={() => handleMinus(orderItem.id)} label="remove  item" >-</button>
                            <div>{orderItem.amount}</div>
                            <button onClick={() => handlePlus(orderItem.id)} label="add item">+</button>
                        </div>

                        <button onClick={() => handleDelete(orderItem.id)} className="delete"><FontAwesomeIcon icon="trash-alt" /></button>
                    </li>
                })}
            </ul>
            <div className="checkout">
                <dl>
                    <div>
                        <dt>Items</dt>
                        <dd>${minDigits(cart.totalPrice)}</dd>
                    </div>
                    <div>
                        <dt>Discount</dt>
                        <dd className="dd-discount">-${minDigits(cart.totalDiscount)}</dd>
                    </div>
                    <div>
                        <dt>Cost</dt>
                        <dd className="dd-cost">${minDigits(Math.round((cart.totalPrice - cart.totalDiscount) * 100) / 100)}</dd>
                    </div>
                    <div>
                        <dt>Estimated time</dt>
                        <dd className="dd-time">{cart.totalTime} mins</dd>
                    </div>
                </dl>

                <button onClick={() => alert('Fake Order is fakely sent to you ! 🚀')}>Payment & Delivery <FontAwesomeIcon icon="long-arrow-alt-right" /></button>
            </div>
        </div>
    )
}

export default Order;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { burgersData } from '../../data/data';
import AddRemove from '../sub/addRemove'

const Details = () => {

    const [amount, setAmount] = useState(1);

    const { id } = useParams();
    // default burger / 404 / more stric routes to add
    const burger = burgersData.burgers.find(x => x.id === parseInt(id));

    const handlePlus = () => {
        setAmount(amount + 1);
    }
    const handleMinus = () => {
        setAmount(Math.max(amount - 1, 0));
    }

    return (
        <div>
            <Link to="/"><FontAwesomeIcon icon="chevron-left" /></Link>

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

        </div>
    )
}

export default Details;
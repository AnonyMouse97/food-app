import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { burgersData } from '../../data/data';

const Details = () => {

    const { id } = useParams();
    const burger = burgersData.burgers.find(x => x.id === parseInt(id));

    return (
        <div>
            <Link to="/"><FontAwesomeIcon icon="chevron-left" /></Link>

            {
                burger.discount &&
                <p> {burger.discount}%  OFF</p>
            }
            <h2>{burger.name}</h2>

            {burger.discount
                ? <> <del> {burger.price}$ </del> <p>{burger.price - burger.discount / 100}$</p> </>
                : <p>{burger.price}$</p>
            }

            <p>{burger.description}</p>

            <dl>
                <dt>Size</dt>
                <dd><FontAwesomeIcon icon="hamburger" /> {burger.size} </dd>
                <dt>Weight</dt>
                <dd> {burger.weight}g</dd>
                <dt><FontAwesomeIcon icon="weight-hanging" /> Prepare time</dt>
                <dd><FontAwesomeIcon icon="clock" /> {burger.time} mins</dd>

            </dl>

        </div>
    )
}

export default Details;
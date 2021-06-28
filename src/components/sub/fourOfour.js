import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FourOfour = () => {
    return (
        <div className="fourOfour">
            <Link to="/" className="back-link"> <FontAwesomeIcon icon="chevron-left" /> </Link>


            <div className="text">
                <h1>404</h1>
                <p>The burger you're looking for is lost in our kitchen...</p>
                <img src={'../img/burgers/aless.webp'} alt="Lost Burger"></img>
            </div>
        </div>
    )
}

export default FourOfour;
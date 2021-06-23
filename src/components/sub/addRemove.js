import React from 'react';

const AddRemove = ({ amount, handlePlus, handleMinus }) => {

    return (
        <div>
            <button onClick={handleMinus} label="add item" >-</button>
            <div>{amount}</div>
            <button onClick={handlePlus} label="remove item">+</button>
        </div>
    )
}

export default AddRemove;
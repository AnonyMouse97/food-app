import React from 'react';

const AddRemove = ({ amount, handlePlus, handleMinus }) => {

    return (
        <div className="add-remove">
            <button onClick={handleMinus} label="add item" >-</button>
            <div>{amount}</div>
            <button onClick={handlePlus} label="remove item">+</button>
        </div>
    )
}

export default AddRemove;
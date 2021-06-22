import React, { useCallback, useState } from 'react';

const AddRemove = () => {
    const [amount, setAmount] = useState(1);

    const handleMinus = useCallback(
        () => setAmount(Math.max(amount - 1, 0)),
        [amount, setAmount]
    );

    const handlePlus = useCallback(
        () => setAmount(amount + 1),
        [amount, setAmount]
    );

    return (
        <div>
            <button onClick={handleMinus} >-</button>
            <div>{amount}</div>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

export default AddRemove;
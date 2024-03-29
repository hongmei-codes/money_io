import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    
    const { transactions } = useContext(GlobalContext);

    // get total
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce(
        (acc, item) => (acc += item),
        0
    ).toFixed(2);

    return (
        <React.Fragment>
            <h4>Current Balance</h4>
        <h1 id="balance">${total}</h1>
        </React.Fragment>
    )
}

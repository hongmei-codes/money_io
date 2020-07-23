import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const sign = transaction.amount > 0 ? "+" : "-";
    const classAttribute = transaction.amount > 0 ? "plus" : "minus";

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={classAttribute}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    );
}

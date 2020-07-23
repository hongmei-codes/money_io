import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <h3>Past Transactions</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </React.Fragment>
    );
}

// values brought in from GlobalContext
// values are mapped through
// for each value in values: render a transaction component that looks like...
// (from Transaction.js) <li className="">{transaction.text}<span>{transaction amount}</span><button className="delete-btn">x</button></li>
// the transaction component is contained within (in this TransactionList.js) <ul className="list"></ul>
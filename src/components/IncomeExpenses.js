import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

    // receive data from global context
    const { transactions } = useContext(GlobalContext);

    // get total income and total expense
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = Math.abs(amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)).toFixed(2);

    return (
        <React.Fragment>
            <div className="inc-exp-container">
                <div>
                    <h4>Money In</h4>
                    <p className="money plus">+${income}</p>
                </div>
                <div>
                    <h4>Money Out</h4>
                    <p className="money minus">-${expense}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

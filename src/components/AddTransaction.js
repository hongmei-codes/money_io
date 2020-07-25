import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            text: text,
            amount: +amount // turns string to number (sign and decimals unaffected)
        }
        addTransaction(newTransaction);

        e.target.reset();
    }
    return (
        <React.Fragment>
            <h3>Add Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Transaction name..." />
                </div>
                <div className="form-control">
                    <input type="number"  value={amount} onChange={e => setAmount(e.target.value)}/>
                    <p>+ for income, - for expense</p>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </React.Fragment>
    )
}

import React from "react";
import TransactionHistoryList from "./TransactionHistoryList";
import style from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table  className={style.transaction}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(({id, type, amount, currency}) => (
                <tr key={id}>
                    <TransactionHistoryList type={type} amount={amount} currency={currency}/>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TransactionHistory;
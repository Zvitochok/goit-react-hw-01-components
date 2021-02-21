import React from "react";
import style from "./index.module.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Friend from "./components/FriendList/Friend";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => {
    return (
        <div className={style.container}>
            <h1>Задание 1 - Профиль социальной сети</h1>
            <Profile 
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            />

            <h2>Задание 2 - Секция статистики</h2>
            <Statistics title="Upload stats" stats={statisticalData} />

            <h2>Задание 3 - Список друзей</h2>
            <Friend friends={friends} />

            <h2>Задание 4 - История транзакций</h2>
            <TransactionHistory items={transactions} />
        </div>
        
    );
}

export default App;
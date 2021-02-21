import React from "react";
import FriendList from "./FriendList";
import style from './Friend.module.css';

const Friend = ({friends}) => {
    return (
        <ul className={style.friend_list}>
            {friends.map(({avatar, name, isOnline, id}) => (
                <li className={style.item} key={id}>
                    <FriendList avatar={avatar} name={name} isOnline={isOnline}/>
                </li>
            ))}
        </ul>
    );
}

export default Friend;
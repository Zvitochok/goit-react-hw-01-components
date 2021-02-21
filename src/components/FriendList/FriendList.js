import React from "react";
import PropTypes from "prop-types";
import style from './Friend.module.css';

const FriendList = ({isOnline, name, avatar}) => {
    const error = isOnline ? style.online : style.offline
    const classes = `${style.status} ${error}`
    return(
        <>
            <span className={classes}>{isOnline}</span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
import React from 'react';

const FriendCard = props => {
    return (
        <div className='card'>
            <h3>{props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default FriendCard;
import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = props => {
    return (
        <div className='card'>
            <h2 className='card-name'>{props.friend.name}</h2>
            <h4>Age: {props.friend.age}</h4>
            <h4>{props.friend.email}</h4>
            <div className='card-buttons'>
                <button className='button'><Link to={`/edit/${props.friend.id}`} className='edit-link'>edit</Link></button>
                <button onClick={() => props.deleteFriend(props.friend)} className='button'>delete</button>
            </div>
        </div>
    )
}

export default FriendCard;
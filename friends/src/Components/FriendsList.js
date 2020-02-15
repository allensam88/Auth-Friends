import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import FriendCard from './FriendCard';

const FriendsList = () => {
    const [friends, setFriend] = useState([]);
    const [deletedFriend, setDeletedFriend] = useState(false);

    useEffect(() => {
        axiosWithAuth()
            .get(`/friends`)
            .then(res => {
                setFriend(res.data);
            })
            .catch(err => console.log(err));
    }, [deletedFriend]);

    const deleteFriend = friend => {
        axiosWithAuth()
        .delete(`/friends/${friend.id}`)
        .then(res => {
            setDeletedFriend(res.data);
        })
        .catch(err => console.log(err));
        alert(`${friend.name} has been deleted.`)
    }

    return (
        <div className='list'>
            {friends.map(friend => {
                return <FriendCard key={friend.id} friend={friend} deleteFriend={deleteFriend} />
          })}
        </div>
    );
};

export default FriendsList;
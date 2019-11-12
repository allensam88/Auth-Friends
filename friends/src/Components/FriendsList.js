import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import FriendCard from './FriendCard';

const FriendsList = () => {
    const [friends, setFriend] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res)
                setFriend(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div className='list'>
            {friends.map(friend => {
                return <FriendCard key={friend.id} friend={friend} />
          })}
        </div>
    );
};

export default FriendsList;
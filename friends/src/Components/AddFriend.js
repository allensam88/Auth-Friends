import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';

const AddFriend = props => {
    const [friend, setFriend] = useState({ name: '', age: '', email: '' });

    const handleChange = (event) => {
        setFriend({ ...friend, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault();
        const newFriend = {
            id: Date.now(),
            name: friend.name,
            age: friend.age,
            email: friend.email,
        };
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log(res.data)
                props.history.push('/friends-list')
            })
            .catch(err => console.log(err));
        alert(`Successfully added user ${friend.name}`);
        setFriend({
            name: '',
            age: '',
            email: ''
        });
    };

    return (
        <div>
            <form onSubmit={submitForm} className='form'>
                <input
                    type='text'
                    name="name"
                    value={friend.name}
                    onChange={handleChange}
                    placeholder='name'
                    className='input'
                    autoComplete='off'
                />
                <input
                    type='text'
                    name='age'
                    value={friend.age}
                    onChange={handleChange}
                    placeholder='age'
                    className='input'
                />
                <input
                    type='text'
                    name='email'
                    value={friend.email}
                    onChange={handleChange}
                    placeholder='email'
                    className='input'
                />
                <button className='button'>Add</button>
            </form>
        </div>
    )
}

export default AddFriend;
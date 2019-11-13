import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';

const EditForm = props => {
    const [friend, setFriend] = useState({ name: '', age: '', email: '' });

    useEffect(() => {
        const id = props.match.params.id;
        axiosWithAuth()
        .get(`/friends/${id}`)
        .then(res => {
            console.log('edit', res);
            setFriend(res.data);
        })
    }, [])

    const handleChange = (event) => {
        setFriend({ ...friend, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault();
        const updatedFriend = {
            id: Date.now(),
            name: friend.name,
            age: friend.age,
            email: friend.email,
        };
        axiosWithAuth()
            .put(`/friends/${friend.id}`, updatedFriend)
            .then(res => {
                props.history.push('/list')
            })
            .catch(err => console.log(err));
        alert(`Successfully updated user ${friend.name}`);
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
                <button className='button'>Update</button>
            </form>
        </div>
    )
}

export default EditForm;
import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';

const AddFriend = () => {
    const [friend, setFriend] = useState({ name: "", age: "", email: "" });

    const handleChange = (event) => {
        setFriend({ ...friend, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault();
        const newFriend = {
            id: Date.now(),
            name: friend.name,
            age: friend.age,
            height: friend.email,
        };
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log(res.data)
                setFriend(res.data)
            })
            .get(err => console.log(err));
        alert(`Successfully added user "${friend.name}"`);
        setFriend({
            name: "",
            age: "",
            email: ""
        });
    };

    // if (props.isAdding) {
    //     return (
    //         <p>Adding Friend...</p>
    //     )
    // } else {

    return (
        <div>
            <form onSubmit={submitForm} className='form'>
                <input
                    type='text'
                    value={friend.name}
                    onChange={handleChange}
                    placeholder='name'
                    className='input'
                />
                <input
                    type='text'
                    value={friend.age}
                    onChange={handleChange}
                    placeholder='age'
                    className='input'
                />
                <input
                    type='text'
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
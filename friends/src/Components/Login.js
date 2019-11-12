import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';

const Login = props => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    };

    const passHandler = e => {
        setPass(e.target.value)
    };

    const login = e => {
        e.preventDefault();
        const credentials = {
            username: user,
            password: pass
        }
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends-list')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    value={user}
                    onChange={userHandler}
                    placeholder="username"
                />
                <input
                    type="password"
                    value={pass}
                    onChange={passHandler}
                    placeholder="password"
                />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Login;
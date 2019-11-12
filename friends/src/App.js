import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import FriendsList from './Components/FriendsList';
import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import Private from './Auth/PrivateRoute';

function App() {
    return (
        <div className="App">
            <h1 className='title'>FRIENDS LIST</h1>
            <div className='navbar'>
                <Link to='/' className='link'>Login</Link>
                <Link to='/friends-list' className='link'>Friends List</Link>
                <Link to='/add-friend' className='link'>Add Friend</Link>
            </div>

            <Route exact path='/' component={Login} />
            <Private path='/friends-list' component={FriendsList} />
            <Private path='/add-friend' component={AddFriend} />

        </div>
    );
}

export default App;
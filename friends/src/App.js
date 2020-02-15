import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import FriendsList from './Components/FriendsList';
import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import EditForm from './Components/EditForm';
import Private from './Auth/PrivateRoute';

function App() {
    return (
        <div className="App">
            <h1 className='title'>FRIENDS LIST</h1>
            <div className='navbar'>
                <Link to='/' className='link'>Login</Link>
                <Link to='/list' className='link'>Friends List</Link>
                <Link to='/add' className='link'>Add Friend</Link>
            </div>

            <Route exact path='/' component={Login} />
            <Private path='/list' component={FriendsList} />
            <Private path='/add' component={AddFriend} />
            <Private path="/edit/:id" component={EditForm} />

        </div>
    );
}

export default App;
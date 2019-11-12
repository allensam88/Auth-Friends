import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import FriendsList from './Components/FriendsList';
import Login from './Components/Login';
import Private from './Auth/PrivateRoute';

function App() {
    return (
        <div className="App">
            <h1>FRIENDS LIST</h1>
            <div>
                <Link to="/">Login</Link>
                <Link to="/friends-list">Friends List</Link>
            </div>

            <Route exact path="/" component={Login} />

            <Private path="/friends-list" component={FriendsList} />

        </div>
    );
}

export default App;
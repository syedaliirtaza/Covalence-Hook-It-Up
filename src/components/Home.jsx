import React, { useState, useEffect}  from 'react';
import {BrowserRouter as Router, Link , Switch, Route } from 'react-router-dom';


const Home = () => {

    const [ users, setUsers ] = useState([]);

   const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => setUsers(json));
    }

    useEffect(() => {
        getUsers();
    } , []);


    return (
        <div>
            <div>
                <ul>
                    {
                        users.map(user => (
                            <li key={user.id}>Name of user is {user.name} and you can
                            click<Link to={`${user.id}/details`}> here</Link> to see my details</li>
                        ))
                    }
                </ul>
            </div>
        </div>

    );
}

export default Home;
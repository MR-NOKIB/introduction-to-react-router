/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Happy users</h2>
            {
                users.map(user => <li key={user.id}>{user.name}</li>)
            }
        </div>
    );
};

export default User;
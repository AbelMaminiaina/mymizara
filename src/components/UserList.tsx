import React from 'react'
import type { User } from '../models/user';

type Props = {
    users: User[];
};

export const UserList : React.FC<Props> = ({ users }) =>{
    return (
<div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Roles:</p>
            <ul>
              {user.userRoles.$values.map((userRole) => (
                <li key={userRole.role.id}>{userRole.role.name}: {userRole.role.description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
    );
};
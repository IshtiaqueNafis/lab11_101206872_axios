import React from 'react';
import UserListItem from "./UserListItem";

const User = ({users}) => {
    console.log(users);
    return (
        <div>
            <p>USER LISTS</p>
            {users.map(user=>(<UserListItem key={user.login.uuid} user={user}/>))}

        </div>
    );
};

export default User;
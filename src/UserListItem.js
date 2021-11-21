import React from 'react';

const UserListItem = ({user}) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={user.picture.medium} alt=""/>
                <h4 className="card-title">Name:{user.name.first}  {user.name.last}</h4>
                <p className="card-text">Time Zone:{user.location.timezone.description}</p>
                <p>address: {user.location.street.name},{user.location.city},{user.location.country}</p>
                <p>Gender:{user.gender}</p>
                <p>UserName:{user.login.username}</p>
                <p>Email:{user.email}</p>
                <p>Date of birth: {user.dob.date}({user.dob.age})</p>
                <p>Registered date:{user.registered.date}</p>
                <p>cell:{user.cell}</p>
                <p>Phone:{user.phone}</p>

            </div>
        </div>
    );
};

export default UserListItem;
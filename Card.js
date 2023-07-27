import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.first_name} /><br></br>
      <h3>User Id:{user.id}</h3>
      <h3>Name:{user.first_name} {user.last_name}</h3>
      <p><strong>Email:{user.email}</strong></p>
    </div>
  );
};

export default Card;

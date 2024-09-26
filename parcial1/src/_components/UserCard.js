import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.pic} alt="Perfil" />
      <h2>{user.name}</h2>
      <p>Mejor tiempo corriendo: {user.running}</p>
      <p>Mejor tiempo nadando: {user.swimming}</p>
      <p>Mejor tiempo en cicla: {user.biking}</p>
    </div>
  );
}

export default UserCard;

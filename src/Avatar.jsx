import React from 'react';

function AvatarComponent({ name, avatarUrl }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={avatarUrl} alt={name} style={{ width: '150px', borderRadius: '50%' }} />
      <h2>{name}</h2>
    </div>
  );
}

export default AvatarComponent;

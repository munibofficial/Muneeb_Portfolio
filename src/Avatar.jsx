import React from 'react';

function AvatarComponent({ name, avatarUrl }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '150px',
          height: '150px',
          overflow: 'hidden',
          borderRadius: '50%',
          margin: '0 auto',
        }}
      >
        <img
          src={avatarUrl}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default AvatarComponent;

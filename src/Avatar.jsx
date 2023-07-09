import React, { useState, useEffect } from 'react';

function AvatarComponent({ name, avatarUrl }) {
  const [expert, setExpert] = useState('Front end developer');

  useEffect(() => {
    const expertTypes = ['Front end developer', 'Graphics designer'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % expertTypes.length;
      setExpert(expertTypes[currentIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="avatar-container">
      <div className="avatar">
        <img
          src={avatarUrl}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </div>
      <h2 style={{ color: 'white' }}>{name}</h2>
      <h1 style={{ color: 'white' }} className="expert">
        <span className="expert-text">{expert}</span>
      </h1>
    </div>
  );
}

export default AvatarComponent;

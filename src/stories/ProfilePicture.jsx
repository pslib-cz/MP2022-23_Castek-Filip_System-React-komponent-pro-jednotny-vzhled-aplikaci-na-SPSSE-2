import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ path, size }) => {
  return (
    <div
      className={`profile-picture-container ${size}`}
    >
      <img className="profile-picture" src={path} alt="Profile" />
    </div>
  );
};

export default ProfilePicture;

import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';
import Card from '../commons/card/card';

function Profile({ user }) {
  const allowList = ['First name', 'Last name', 'Phone', 'Email', 'Bio'];
  const userData = {
    'First name': user.firstName,
    'Last name': user.lastName,
    Phone: user.phone,
    Email: user.email,
    Bio: user.bio,
  };
  return (
    <div className="user__main">
      <h3>Profile</h3>
      <div className="user__container">
        <div className="user__container__left">
          <img src={user.avatarImage} alt="avatar" />
        </div>
        <div className="user__container__right">
          <Card data={userData} allowList={allowList} />
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;

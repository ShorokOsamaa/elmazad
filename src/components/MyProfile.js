import React from 'react';
import profileImage from '../assets/OIP.jpg'; // Adjust the path according to your project structure

const MyProfile = () => {
  return (
    <>
      <div id="MyProfile">
        <h1>My Profile</h1>
        <div className='HeaderPart'>
          <img src={profileImage} alt='ProfileImg' />
          <span>User Name</span>
          <span>City ,Country</span>
        </div>
        <div>
          
        </div>
      </div> 
    </>
  );
}

export default MyProfile;

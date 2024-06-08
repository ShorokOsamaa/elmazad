import React from 'react';
import profileImage from '../assets/OIP.jpg'; // Adjust the path according to your project structure

const MyProfile = () => {
  return (
    <div>
      <h1>My Profile</h1>
      <div id="MyProfile">
        <div className='HeaderPart'>
          <img src={profileImage} alt='ProfileImg' />
          <p>User Name</p>
          <p>City ,Country</p>
        </div>
        <div>
          
        </div>
      </div> 
    </div>
  );
}

export default MyProfile;

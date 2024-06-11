import React, { useState } from 'react';
import profileImage from '../assets/OIP.jpg'; // Adjust the path according to your project structure
import Card from './Card'; // Import the Card component


const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Menreet Gaber',
    email: 'menreetgaber@gmail.com',
    age: 23,
    address: 'Alexandria, Egypt',
  });

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Handler to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Sample bid history data
  const bidHistory = [
    {
      id: 1,
      name: "Vintage Watch",
      startingPrice: 100,
      reservedPrice: 200,
      buyNow: 250,
      endDate: "2024-12-31T23:59:59",
      imagesPaths: ["https://via.placeholder.com/150"],
    },
    {
      id: 3,
      name: "Vintage Watch",
      startingPrice: 100,
      reservedPrice: 200,
      buyNow: 250,
      endDate: "2024-12-31T23:59:59",
      imagesPaths: ["https://via.placeholder.com/150"],
    },
    {
      id: 2,
      name: "Antique Vase",
      startingPrice: 150,
      reservedPrice: 300,
      buyNow: 350,
      endDate: "2024-12-30T23:59:59",
      imagesPaths: ["https://via.placeholder.com/150"],
    },
    {
      id: 4,
      name: "Antique Vase",
      startingPrice: 150,
      reservedPrice: 300,
      buyNow: 350,
      endDate: "2024-12-30T23:59:59",
      imagesPaths: ["https://via.placeholder.com/150"],
    },
  ];


  return (
    <div id="MyProfile">
      <div className='bg'>
        <div className='HeaderPart'>
          <img src={profileImage} alt='ProfileImg' />
          <p className='name'>{profileData.name}</p>
          <p>{profileData.address.split(',')[0]}, {profileData.address.split(',')[1]}</p>
        </div>
        <div className='line'></div>
      </div>
      
      <div className='content'>
        <div className='leftSide'>
          <p className='myInfo'>My info:</p>
          <div className='leftContainer'>
            <div className='leftPart'>
              <div className='col1'>
                <p>Name</p>
                <br />
                <p>Email</p>
                <br />
                <p>Age</p>
                <br />
                <p>Address</p>
              </div>
              <div className='col2'>
                {isEditing ? (
                  <>
                    <input
                      type='text'
                      name='name'
                      value={profileData.name}
                      onChange={handleInputChange}
                      className='tdData'
                    />
                    <br />
                    <input
                      type='email'
                      name='email'
                      value={profileData.email}
                      onChange={handleInputChange}
                      className='tdData'
                    />
                    <br />
                    <input
                      type='number'
                      name='age'
                      value={profileData.age}
                      onChange={handleInputChange}
                      className='tdData'
                    />
                    <br />
                    <input
                      type='text'
                      name='address'
                      value={profileData.address}
                      onChange={handleInputChange}
                      className='tdData'
                    />
                  </>
                ) : (
                  <>
                    <p className='tdData'>{profileData.name}</p>
                    <p className='tdData'>{profileData.email}</p>
                    <p className='tdData'>{profileData.age}</p>
                    <p className='tdData'>{profileData.address}</p>
                  </>
                )}
              </div>
            </div>
            <div className='buttonPart'>
              <button onClick={toggleEditMode} className='editButton'>
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        </div>

        <div className='rightSide'>
          <h2>My Bids</h2>
          <div className='cards'>
            {bidHistory.map((item) => (
            <Card key={item.id} item={item} />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default MyProfile;

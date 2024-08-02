import React, { useState } from 'react';
import './UserProfilePage.css';

const UserProfilePage = () => {
  // Example user data using useState hook
  const [user, setUser] = useState({
    name: 'Rohit',
    email: 'rohitbnair1@gmail.com',
    city: 'New York',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg'
  });

  // State for form inputs
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    city: user.city,
    profilePicture: null
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: URL.createObjectURL(file)
      });
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
      city: formData.city,
      profilePicture: formData.profilePicture ? formData.profilePicture : user.profilePicture
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={user.profilePicture} alt="Profile" className="profile-picture" />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
          <p className="profile-city">{user.city}</p>
        </div>
        <form onSubmit={handleSubmit} className="profile-form">
          <h3 className="form-header">Update Profile</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default UserProfilePage;

import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import MiniCard from './MiniCard';

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    city: '',
    profilePicture: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    profilePicture: null
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          city: data.city,
          profilePicture: data.profilePicture
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    fetch('http://localhost:4000/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.error('Error fetching user events:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        city: formData.city,
        profilePicture: formData.profilePicture ? formData.profilePicture : user.profilePicture
      })
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  return (
    <div className="page-container">
      <div className="profile-events-container">
        <div className="profile-card">
          <div className="profile-header">
            <img src={user.profilePicture || "https://doonofficersacademy.com/wp-content/uploads/2022/10/sample-profile.png"} alt="Profile" className="profile-picture" />
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
            <button type="submit" className="btn-primary">Save Changes</button>
          </form>
        </div>
        <div className="events-container">
          <h2 className="events-header">Total Events Booked: {events.length}</h2>
          <div className="events-cards">
            {events.map((event, index) => (
              <MiniCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminUsers = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleBackClick = () => {
        navigate('/admin');
    };

    const handleEditClick = (userID) => {
        navigate(`/edituser/${userID}`);
    };

    const handleDeleteClick = (userID) => {
        // Add logic to delete the user
        console.log(`Delete user with ID: ${userID}`);
    };

    return (
        <div className="admin-home-container">
            <div className="admin-home-content">
                <h1>User Management</h1>
                <button className="nav-button" onClick={handleBackClick}>Back to Admin Home</button>
            </div>
            <div className="user-list">
                <h2>Registered Users</h2>
                <div className="user-cards">
                    {users.map(user => (
                        <div key={user._id} className="user-card">
                            <h3>{user.userName}</h3>
                            <p>Email: {user.userEmail}</p>
                            <p>Phone: {user.userPhone}</p>
                            <button className="edit-button" onClick={() => handleEditClick(user._id)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDeleteClick(user._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleManageUserClick = () => {
        navigate('/manageuser');
    }

    const handleManageEventsClick = () => {
        navigate('/manageevents');
    }

    const handleAddEventClick = () => {
        navigate('/addevent');
    }

    const handleViewEditProfilesClick = () => {
        navigate('/vieweditprofiles');
    }

    const handleLogoutClick = () => {
        // Add logout logic here
        navigate('/login');
    }

    return (
        <div className="admin-home-container">
            <nav className="navbar">
                <div className="logo">Event Management System</div>
                <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
            </nav>
            <div className="admin-home-content">
                <h1>Admin Home Page</h1>
                <div className="button-group">
                    <button className="nav-button" onClick={handleManageUserClick}>Manage User</button>
                    <button className="nav-button" onClick={handleManageEventsClick}>Manage Events</button>
                    <button className="nav-button" onClick={handleAddEventClick}>Add New Event</button>
                    <button className="nav-button" onClick={handleViewEditProfilesClick}>View/Edit User Profiles</button>
                </div>
            </div>
            <div className="event-list">
                <h2>Created Events</h2>
                <div className="event-cards">
                    <div className="event-card music-card">
                        <h3>Music Show</h3>
                        <p>Date: 2024-08-15</p>
                        <p>Time: 7:00 PM</p>
                        <p>Venue: Auditorium</p>
                        <p>Status: Registration Open</p>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                    </div>
                    <div className="event-card dance-card">
                        <h3>Dance Show</h3>
                        <p>Date: 2024-08-20</p>
                        <p>Time: 6:00 PM</p>
                        <p>Venue: Dance Hall</p>
                        <p>Status: Registration Closed</p>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                    </div>
                    <div className="event-card arts-card">
                        <h3>Arts Exhibition</h3>
                        <p>Date: 2024-08-25</p>
                        <p>Time: 5:00 PM</p>
                        <p>Venue: Art Gallery</p>
                        <p>Status: Registration Open</p>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                    </div>
                    <div className="event-card painting-card">
                        <h3>Painting Competition</h3>
                        <p>Date: 2024-08-30</p>
                        <p>Time: 4:00 PM</p>
                        <p>Venue: Community Center</p>
                        <p>Status: Registration Open</p>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                    </div>
                    <div className="event-card racing-card">
                        <h3>Car Racing</h3>
                        <p>Date: 2024-09-05</p>
                        <p>Time: 3:00 PM</p>
                        <p>Venue: Racing Track</p>
                        <p>Status: Registration Open</p>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                    </div>
                    <div className="event-card gaming-card">
                        <h3>Gaming Tournament</h3>
                        <p>Date: 2024-09-10</p>
                        <p>Time: 2:00 PM</p>
                        <p>Venue: Gaming Arena</p>
                        <p>Status: Registration Open</p>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
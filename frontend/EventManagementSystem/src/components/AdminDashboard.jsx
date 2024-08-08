import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/events')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const handleUsersClick = () => {
        navigate('/admin/user');
    };

    const handleAddEventClick = () => {
        navigate('/addevent');
    };

    const handleEditClick = (eventID) => {
        navigate(`/editevent/${eventID}`);
    };

    const handleDeleteClick = (eventID) => {
        fetch(`http://localhost:4000/events/${eventID}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Failed to delete event');
            }
        })
        .then(message => {
            console.log(message);
            setEvents(events.filter(event => event.eventID !== eventID));
        })
        .catch(error => console.error('Error deleting event:', error));
    };

    return (
        <div className="admin-home-container">
            <div className="admin-home-content">
                <h1>Admin Home Page</h1>
                <div className="button-group">
                    <button className="nav-button" onClick={handleUsersClick}>Show Users</button>
                    <button className="nav-button" onClick={handleAddEventClick}>Add New Event</button>
                </div>
            </div>
            <div className="event-list">
                <h2>Upcoming Events</h2>
                <div className="event-cards">
                    {events.map(event => (
                        <div key={event.eventID} className="event-card">
                            <h3>{event.eventName}</h3>
                            <p>Artist: {event.eventArtist}</p>
                            <p>EventID: {event.eventID}</p>
                            <p>Short Description: {event.eventShortDescription}</p>
                            <p>Description: {event.eventDescription}</p>
                            <p>Date: {event.eventStartDate} - {event.eventEndDate}</p>
                            <p>Price: ${event.price}</p>
                            <p>Location: {event.location}</p>
                            <p>Status: {event.status}</p>
                            <div className="card-images">
                                <img src={event.image1} alt={`${event.eventName} image 1`} />
                                <img src={event.image2} alt={`${event.eventName} image 2`} />
                                <img src={event.image3} alt={`${event.eventName} image 3`} />
                                <img src={event.image4} alt={`${event.eventName} image 4`} />
                                <img src={event.image5} alt={`${event.eventName} image 5`} />
                            </div>
                            <button className="edit-button" onClick={() => handleEditClick(event.eventID)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDeleteClick(event.eventID)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

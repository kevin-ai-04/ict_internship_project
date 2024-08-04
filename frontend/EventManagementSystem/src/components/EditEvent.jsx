import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminDashboard.css';
import './EditEvent.css';

const EditEvent = () => {
    const navigate = useNavigate();
    const { eventID } = useParams();
    const [event, setEvent] = useState({
        eventName: '',
        eventArtist: '',
        eventShortDescription: '',
        eventDescription: '',
        eventStartDate: '',
        eventEndDate: '',
        price: '',
        location: '',
        status: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
    });

    useEffect(() => {
        fetch(`http://localhost:4000/events/${eventID}`)
            .then(response => response.json())
            .then(data => setEvent(data))
            .catch(error => console.error('Error fetching event:', error));
    }, [eventID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent(prevEvent => ({
            ...prevEvent,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/events/${eventID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            navigate('/manageevents'); // Redirect to manage events or other page
        })
        .catch(error => console.error('Error updating event:', error));
    };

    return (
        <div className="edit-event-container">
            <div className="edit-event-content">
                <h1>Edit Event</h1>
                <form onSubmit={handleSubmit} className="event-form">
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name:</label>
                        <input 
                            type="text" 
                            id="eventName" 
                            name="eventName" 
                            value={event.eventName} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventArtist">Event Artist:</label>
                        <input 
                            type="text" 
                            id="eventArtist" 
                            name="eventArtist" 
                            value={event.eventArtist} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventShortDescription">Short Description:</label>
                        <input 
                            type="text" 
                            id="eventShortDescription" 
                            name="eventShortDescription" 
                            value={event.eventShortDescription} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDescription">Detailed Description:</label>
                        <textarea 
                            id="eventDescription" 
                            name="eventDescription" 
                            value={event.eventDescription} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventStartDate">Start Date:</label>
                        <input 
                            type="date" 
                            id="eventStartDate" 
                            name="eventStartDate" 
                            value={event.eventStartDate} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventEndDate">End Date:</label>
                        <input 
                            type="date" 
                            id="eventEndDate" 
                            name="eventEndDate" 
                            value={event.eventEndDate} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input 
                            type="number" 
                            id="price" 
                            name="price" 
                            value={event.price} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            value={event.location} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <input 
                            type="text" 
                            id="status" 
                            name="status" 
                            value={event.status} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image1">Image URL 1:</label>
                        <input 
                            type="text" 
                            id="image1" 
                            name="image1" 
                            value={event.image1} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image2">Image URL 2:</label>
                        <input 
                            type="text" 
                            id="image2" 
                            name="image2" 
                            value={event.image2} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image3">Image URL 3:</label>
                        <input 
                            type="text" 
                            id="image3" 
                            name="image3" 
                            value={event.image3} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image4">Image URL 4:</label>
                        <input 
                            type="text" 
                            id="image4" 
                            name="image4" 
                            value={event.image4} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image5">Image URL 5:</label>
                        <input 
                            type="text" 
                            id="image5" 
                            name="image5" 
                            value={event.image5} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">Update Event</button>
                        <button type="button" className="cancel-button" onClick={() => navigate('/admin')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEvent;

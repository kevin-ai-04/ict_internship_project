import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEvent.css';

const AddEvent = () => {
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        eventID: '', // Add eventID field
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent(prevEvent => ({
            ...prevEvent,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/newevent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            navigate('/admin'); // Redirect to manage events or another page
        })
        .catch(error => console.error('Error adding event:', error));
    };

    return (
        <div className="add-event-container">
            <div className="add-event-content">
                <h1>Add New Event</h1>
                <form onSubmit={handleSubmit} className="event-form">
                    <div className="form-group">
                        <label htmlFor="eventID">Event ID</label> {/* Add input for eventID */}
                        <input id="eventID" type="number" name="eventID" value={event.eventID} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input id="eventName" type="text" name="eventName" value={event.eventName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventArtist">Event Artist</label>
                        <input id="eventArtist" type="text" name="eventArtist" value={event.eventArtist} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventShortDescription">Short Description</label>
                        <input id="eventShortDescription" type="text" name="eventShortDescription" value={event.eventShortDescription} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDescription">Detailed Description</label>
                        <textarea id="eventDescription" name="eventDescription" value={event.eventDescription} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventStartDate">Start Date</label>
                        <input id="eventStartDate" type="date" name="eventStartDate" value={event.eventStartDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventEndDate">End Date</label>
                        <input id="eventEndDate" type="date" name="eventEndDate" value={event.eventEndDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input id="price" type="number" name="price" value={event.price} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input id="location" type="text" name="location" value={event.location} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <input id="status" type="text" name="status" value={event.status} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image1">Image URL 1</label>
                        <input id="image1" type="text" name="image1" value={event.image1} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image2">Image URL 2</label>
                        <input id="image2" type="text" name="image2" value={event.image2} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image3">Image URL 3</label>
                        <input id="image3" type="text" name="image3" value={event.image3} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image4">Image URL 4</label>
                        <input id="image4" type="text" name="image4" value={event.image4} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image5">Image URL 5</label>
                        <input id="image5" type="text" name="image5" value={event.image5} onChange={handleChange} />
                    </div>
                    <button type="submit" className="submit-button">Add Event</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;

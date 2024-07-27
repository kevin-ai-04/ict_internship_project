import React, { useState, useEffect } from 'react';
import MiniCard from './MiniCard';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <>
    <div className='miniCardCollection'>
    <h2>Upcoming Concerts</h2>
      {events.map(event => (
        <MiniCard key={event.eventID} event={event} />
      ))}
    </div>
    </>
  );
};

export default EventList;

import React, { useState, useEffect } from 'react';
import MiniCard from './MiniCard';
import './EventList.css'

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
      <div className='eventListWrapper'>
        <h2 className='eventListHeader'>Upcoming Concerts</h2>
        <div className='miniCardCollection' >
          {events.map(event => (
            <MiniCard key={event.eventID} event={event} />
          ))}
        </div>
      </div>
      <div className="eventListSpacer">
        footer
      </div>
    </>
  );
};

export default EventList;

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

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const miniCards = document.querySelectorAll('.miniCard');

    const animateCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    const enlargeCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(8)';
    };

    const shrinkCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    miniCards.forEach(card => {
      card.addEventListener('mouseenter', enlargeCursor);
      card.addEventListener('mouseleave', shrinkCursor);
    });

    window.addEventListener('mousemove', animateCursor);

    return () => {
      window.removeEventListener('mousemove', animateCursor);
      miniCards.forEach(card => {
        card.removeEventListener('mouseenter', enlargeCursor);
        card.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, [events]);

  return (
    <>
      <div className='miniCardCollection'>
        <h2>Upcoming Concerts</h2>
        {events.map(event => (
          <MiniCard key={event.eventID} event={event} />
        ))}
      </div>
      <div className="cursor"></div>
    </>
  );
};

export default EventList;

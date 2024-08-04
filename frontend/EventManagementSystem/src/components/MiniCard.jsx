import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';
import './MiniCard.css';

const MiniCardWrapper = styled('div')(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: 'none',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 0 120px rgba(255, 255, 255, 0.3)`, 
  }
}));


const MiniCard2 = ({ event }) => {
  return (
    <MiniCardWrapper>
      <div className="miniCard">
        <Link to={`/list/${event.eventID}`} className="cardImage">
          <img src={event.image1} alt={event.eventName} />
        </Link>
        <div className="cardContent">
          <Link to={`/list/${event.eventID}`} className="cardHeader">
            <h2>{event.eventName}</h2>
            <span className="price">${event.price}</span>
          </Link>
          <p>{event.eventDescription}</p>
          <div className="eventDates">
            <p>Dates: {event.eventStartDate} to {event.eventEndDate}</p>

          </div>
          <p className={`status ${event.status.toLowerCase()}`}>{event.status}</p>
          <div className="cardFooter">
            <p className="location">{event.location}</p>
            <Link to={`/list/${event.eventID}`}><p className='cardArrow'>→</p></Link>
          </div>
        </div>
      </div>
    </MiniCardWrapper>
  );
};


const formatDate = (dateString) => format(new Date(dateString), 'MMM dd, yyyy');

const MiniCard = ({ event }) => {
  return (
    <MiniCardWrapper>
      <div className="miniCard">
        <Link to={`/list/${event.eventID}`} className="cardImage">
          <img src={event.image1} alt={event.eventName} />
        </Link>
        <div className="cardContent">
          <Link to={`/list/${event.eventID}`} className="cardHeader">
            <h2>{event.eventName}</h2>
          </Link>
          <p>{event.eventDescription}</p>
          <div className="eventDates">
            <p>{formatDate(event.eventStartDate)} to {formatDate(event.eventEndDate)}</p>
            <p className={`status ${event.status.toLowerCase()}`}>{event.status}</p>
            <p className="location">{event.location}</p>
          </div>
        </div>
        <div className='cardRight'>
          <span className="price">${event.price}</span>
          <Link to={`/list/${event.eventID}`}><p className='cardArrow'>→</p></Link>
        </div>
      </div>
    </MiniCardWrapper>
  );
};

export default MiniCard;
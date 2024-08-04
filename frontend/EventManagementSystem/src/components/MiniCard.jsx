import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const MiniCardWrapper = styled('div')(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backgroundColor: 'transparent', // Ensure background is transparent
  boxShadow: 'none', // Remove default box shadow
  border: 'none', // Remove any border if present
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.2)`,
  }
}));

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
            <span className="price">${event.price}</span>
          </Link>
          <p>{event.eventDescription}</p>
          <div className='cardFooter'>
            <p className="location">{event.location}</p>
            <Link to={`/list/${event.eventID}`}><p className='cardArrow'>→</p></Link>
          </div>
        </div>
      </div>
    </MiniCardWrapper>
  );
};

export default MiniCard;

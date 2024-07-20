import React from 'react';

const MiniCard = ({ event }) => {
  return (
    <div className="miniCard">
      <div className="cardImage">
        <img src={event.image1} alt={event.eventName} />
      </div>
      <div className="cardContent">
        <div className="cardHeader">
          <h2>{event.eventName}</h2>
          <span className="price">${event.price}</span>
        </div>
        <p>{event.eventDescription}</p>
        <div className='cardFooter'>
          <p className="location">{event.location}</p>
          <p className='cardArrow'>→</p>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;

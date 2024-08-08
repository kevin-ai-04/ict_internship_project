import React from 'react';
import './Home.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const Home = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="https://pbs.twimg.com/media/FpL40i_akAA718B.jpg:large" alt="Taylor Swift - Eras Tour" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="https://lkloweproductions.wordpress.com/wp-content/uploads/2014/09/p5_edsheeran_poster_v3.png" alt="Ed Sheeran - Divide Tour" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="https://i.pinimg.com/originals/82/0c/d2/820cd2d85334d4522e8f817b8a1a4504.png" alt="Beyoncé - Renaissance Tour" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="https://www.billboard.com/wp-content/uploads/media/01-adele-poster-2016-billboard-embed.jpg" alt="Adele - Live in Concert" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="https://dx35vtwkllhj9.cloudfront.net/trafalgarreleasing/coldplay-music-of-the-spheres/images/regions/intl/onesheet.jpg" alt="Coldplay - Music of the Spheres" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="https://images-cdn.ubuy.co.in/6368b57995bff7796173dce6-billie-eilish-blue-wall-poster-14-725.jpg" alt="Billie Eilish - Happier Than Ever" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="https://res.klook.com/image/upload/v1719467824/n1bc9d5fcwhkarhojbgc.jpg" alt="Bruno Mars - 24K Magic Tour" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="https://i.pinimg.com/originals/48/c3/b6/48c3b6ab980681ed638d36a2658094f0.jpg" alt="The Weeknd - After Hours Tour" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="https://rukminim2.flixcart.com/image/850/1000/kngd0nk0/poster/a/h/n/medium-teneur-poster-ariana-grande-sweetener-poster-12-x-12-inch-original-imag24hqngbbewnw.jpeg" alt="Ariana Grande - Sweetener Tour" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src="https://i.ebayimg.com/images/g/alcAAOSweEFbEGOo/s-l400.jpg" alt="Shawn Mendes - Wonder Tour" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="Events+">Events+</h1>
        <div className="author">
          <h2>Concerts and More</h2>
          <p>
            Discover an array of events that cater to every taste, from electrifying concerts featuring your favorite artists to immersive cultural experiences.
          </p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/EventList" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" className="explore-button">
            Explore Events
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

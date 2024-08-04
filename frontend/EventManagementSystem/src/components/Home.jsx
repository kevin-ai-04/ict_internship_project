import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="banner">
        <div className="slider" style={{ '--quantity': 10 }}>
          <div className="item" style={{ '--position': 1 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_1.jpg" alt="Dragon 1" /></div>
          <div className="item" style={{ '--position': 2 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_2.jpg" alt="Dragon 2" /></div>
          <div className="item" style={{ '--position': 3 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_3.jpg" alt="Dragon 3" /></div>
          <div className="item" style={{ '--position': 4 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_4.jpg" alt="Dragon 4" /></div>
          <div className="item" style={{ '--position': 5 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_5.jpg" alt="Dragon 5" /></div>
          <div className="item" style={{ '--position': 6 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_6.jpg" alt="Dragon 6" /></div>
          <div className="item" style={{ '--position': 7 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_7.jpg" alt="Dragon 7" /></div>
          <div className="item" style={{ '--position': 8 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_8.jpg" alt="Dragon 8" /></div>
          <div className="item" style={{ '--position': 9 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_9.jpg" alt="Dragon 9" /></div>
          <div className="item" style={{ '--position': 10 }}><img src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/slider_3d/images/dragon_10.jpg" alt="Dragon 10" /></div>
        </div>
        <div className="content">
          <h1 data-content="Events+">Events+</h1>
          <div className="author">
            <h2>LUN DEV</h2>
            <p><b>Web Design</b></p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
